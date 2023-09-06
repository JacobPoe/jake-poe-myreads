export class Book {
  constructor(
    allowAnonLogging,
    authors,
    canonicalVolumeLink,
    categories,
    contentVersion,
    description,
    id,
    imageLinks,
    language,
    maturityRating,
    pageCount,
    panelizationSummary,
    previewLink,
    publishedDate,
    publisher,
    readingModes,
    shelf,
    subtitle,
    title
  ) {
    this.allowAnonLogging = allowAnonLogging;
    this.authors = authors;
    this.canonicalVolumeLink = canonicalVolumeLink;
    this.categories = categories;
    this.contentVersion = contentVersion;
    this.description = description;
    this.id = id;
    this.imageLinks = imageLinks;
    this.language = language;
    this.maturityRating = maturityRating;
    this.pageCount = pageCount;
    this.panelizationSummary = panelizationSummary;
    this.previewLink = previewLink;
    this.publishedDate = publishedDate;
    this.publisher = publisher;
    this.readingModes = readingModes;
    this.shelf = shelf;
    this.subtitle = subtitle;
    this.title = title;
  }
}
