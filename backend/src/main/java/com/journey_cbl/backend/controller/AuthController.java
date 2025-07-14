package com.journey_cbl.backend.controller;

import com.google.api.core.ApiFuture;
import com.google.cloud.Timestamp;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.firebase.auth.*;
import com.google.firebase.cloud.FirestoreClient;
import com.journey_cbl.backend.dto.RegisterRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request) {
        try {
            // Verifica se o e-mail já está em uso
            try {
                FirebaseAuth.getInstance().getUserByEmail(request.getEmail());
                return ResponseEntity.status(HttpStatus.CONFLICT)
                        .body(Map.of("error", "E-mail já está em uso."));
            } catch (FirebaseAuthException e) {
                if (!e.getAuthErrorCode().equals(AuthErrorCode.USER_NOT_FOUND)) {
                    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                            .body(Map.of("error", "Erro ao verificar e-mail: " + e.getMessage()));
                }
                // OK, continua
            }

            // Cria usuário no Firebase Authentication
            UserRecord.CreateRequest createRequest = new UserRecord.CreateRequest()
                    .setEmail(request.getEmail())
                    .setPassword(request.getSenha())
                    .setDisplayName(request.getApelido());

            UserRecord userRecord = FirebaseAuth.getInstance().createUser(createRequest);
            String uid = userRecord.getUid();

            // Salva dados no Firestore
            Firestore db = FirestoreClient.getFirestore();
            Map<String, Object> userData = new HashMap<>();
            userData.put("id", uid);
            userData.put("email", request.getEmail());
            userData.put("apelido", request.getApelido());
            userData.put("genero", request.getGenero());
            userData.put("pronome", request.getPronome());
            userData.put("premium", false);
            userData.put("criadoEm", Timestamp.now());

            ApiFuture<?> writeResult = db.collection("usuarios").document(uid).set(userData);

            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(Map.of("message", "Usuário registrado com sucesso!", "uid", uid));

        } catch (FirebaseAuthException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("error", "Erro ao registrar no Firebase: " + e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Erro interno: " + e.getMessage()));
        }
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyToken(@RequestHeader("Authorization") String authorization) {
        try {
            if (authorization == null || !authorization.startsWith("Bearer ")) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(Map.of("error", "Token ausente ou inválido"));
            }

            String idToken = authorization.substring(7); // remove "Bearer "

            FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(idToken);
            String uid = decodedToken.getUid();
            String email = decodedToken.getEmail();

            // Buscar dados adicionais do Firestore
            Firestore db = FirestoreClient.getFirestore();
            DocumentSnapshot doc = db.collection("usuarios").document(uid).get().get();

            Map<String, Object> usuario = doc.exists() ? doc.getData() : Map.of();

            Map<String, Object> response = new HashMap<>();
            response.put("uid", uid);
            response.put("email", email);
            response.put("dados", usuario);

            return ResponseEntity.ok(response);

        } catch (FirebaseAuthException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Token inválido ou expirado: " + e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Erro ao verificar token: " + e.getMessage()));
        }
    }
}