class CardData {
  constructor(id, title, subtitle, categoryId, textContent, quote, tips, icon, image, tags) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.category = categoryId;
    this.textContent = textContent;
    this.quote = quote;
    this.tips = tips;
    this.icon = icon;
    this.image = image;
    this.tags = tags;
  }
}
export default CardData;