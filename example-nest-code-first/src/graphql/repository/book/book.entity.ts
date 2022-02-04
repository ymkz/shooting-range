export class BookEntity {
  readonly id: string
  readonly title: string

  constructor(id: string, title: string) {
    this.id = id
    this.title = title
  }
}
