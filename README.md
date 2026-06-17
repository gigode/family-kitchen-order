# 家里小馆点菜单

一个无后端的家庭饭店点菜网站：菜品图片、分类筛选、搜索、加减份数、点单备注和一键复制。

## 使用

直接打开 `index.html` 即可浏览。也可以用任意静态服务器运行：

```powershell
python -m http.server 5173
```

## 图片来源

菜品图优先来自 [Openverse](https://openverse.org/) 开放许可图片搜索，`image-data.js` 中保存了图片地址、来源链接和署名信息。没有合适开放图时，页面会退回固定关键词的 [LoremFlickr](https://loremflickr.com/) 图片。后续如果有自家实拍图，只要替换 `image-data.js` 中对应条目的 `image` 地址即可。
