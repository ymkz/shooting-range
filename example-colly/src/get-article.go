package main

import (
	"fmt"

	"github.com/gocolly/colly/v2"
)

func getArticle(url string) (string, string, string) {
	var (
		title       string
		description string
		image       string
	)

	c := colly.NewCollector(colly.DetectCharset())

	c.OnHTML("title", func(e *colly.HTMLElement) {
		title = e.Text
	})
	c.OnHTML("meta[property=\"og:title\"]", func(e *colly.HTMLElement) {
		title = e.Attr("content")
	})

	c.OnHTML("meta[name=\"description\"]", func(e *colly.HTMLElement) {
		description = e.Attr("content")
	})
	c.OnHTML("meta[property=\"og:description\"]", func(e *colly.HTMLElement) {
		description = e.Attr("content")
	})

	c.OnHTML("meta[property=\"og:image\"]", func(e *colly.HTMLElement) {
		image = e.Attr("content")
	})

	c.Visit(url)

	return title, description, image
}

func main() {
	title, description, image := getArticle("https://sttoke.jp/collections/shop/products/sttoke-large-luxe-black")
	// title, description, image := getArticle("https://qiita.com/mugi111/items/9063e7c6d9e86164d6c3")
	fmt.Println(title)
	fmt.Println(description)
	fmt.Println(image)
}
