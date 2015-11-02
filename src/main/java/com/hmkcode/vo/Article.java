package com.hmkcode.vo;

import java.util.LinkedList;
import java.util.List;

public class Article {

	private String title;
	private String url;
	private List<String> categories;
	private String tags;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public List<String> getCategories() {
		return categories;
	}
	public void setCategories(List<String> categories) {
		this.categories = categories;
	}
	public String getTags() {
		return tags;
	}
	public void setTags(String tags) {
		this.tags = tags;
	}

	public void addCategory(String category){
		if(this.categories == null)
			this.categories = new LinkedList<String>();
		this.categories.add(category);
	}
	public void addTag(String tag){
		this.tags=tag;
	}
	@Override
	public String toString() {
		return "Article [title=" + title + ", url=" + url + ", categories="
				+ categories + ", tags=" + tags + "]";
	}



}
