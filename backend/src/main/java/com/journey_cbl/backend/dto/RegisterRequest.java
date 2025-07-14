package com.journey_cbl.backend.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

public class RegisterRequest {
    @NotBlank(message = "O e-mail é obrigatório.")
    @Email(message = "E-mail inválido.")
    private String email;

    @NotBlank(message = "A senha é obrigatória.")
    @Size(min = 6, message = "A senha deve ter no mínimo 6 caracteres.")
    private String senha;

    @NotBlank(message = "O apelido é obrigatório.")
    @Size(min = 3, message = "O apelido deve ter no mínimo 3 caracteres.")
    private String apelido;

    @NotBlank(message = "O gênero é obrigatório.")
    private String genero;

    @NotBlank(message = "O pronome é obrigatório.")
    private String pronome;

    // Getters e Setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getApelido() {
        return apelido;
    }

    public void setApelido(String apelido) {
        this.apelido = apelido;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getPronome() {
        return pronome;
    }

    public void setPronome(String pronome) {
        this.pronome = pronome;
    }

    @Override

    public String toString() {
        return "RegisterRequest{" +
                "email='" + email + '\'' +
                ", senha='" + senha + '\'' +
                ", apelido='" + apelido + '\'' +
                ", genero='" + genero + '\'' +
                ", pronome='" + pronome + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {

        if (this == o)
            return true;
        if (!(o instanceof RegisterRequest))
            return false;

        RegisterRequest that = (RegisterRequest) o;

        if (!email.equals(that.email))
            return false;
        if (!senha.equals(that.senha))
            return false;
        if (!apelido.equals(that.apelido))
            return false;
        if (!genero.equals(that.genero))
            return false;
        return pronome.equals(that.pronome);
    }

    @Override
    public int hashCode() {
        int result = email.hashCode();
        result = 31 * result + senha.hashCode();
        result = 31 * result + apelido.hashCode();
        result = 31 * result + genero.hashCode();
        result = 31 * result + pronome.hashCode();
        return result;
    }

    public RegisterRequest() {
        // Construtor padrão necessário para o Spring
    }

    public RegisterRequest(String email, String senha, String apelido, String genero, String pronome) {
        this.email = email;
        this.senha = senha;
        this.apelido = apelido;
        this.genero = genero;
        this.pronome = pronome;
    }

    public RegisterRequest(String email, String senha, String apelido) {
        this.email = email;
        this.senha = senha;
        this.apelido = apelido;
        this.genero = null; // Gênero pode ser opcional
        this.pronome = null; // Pronome pode ser opcional
    }

    public RegisterRequest(String email, String senha) {
        this.email = email;
        this.senha = senha;
        this.apelido = null; // Apelido pode ser opcional
        this.genero = null; // Gênero pode ser opcional
        this.pronome = null; // Pronome pode ser opcional
    }

    public RegisterRequest(String email) {
        this.email = email;
        this.senha = null; // Senha pode ser opcional
        this.apelido = null; // Apelido pode ser opcional
        this.genero = null; // Gênero pode ser opcional
        this.pronome = null; // Pronome pode ser opcional

    }
}
