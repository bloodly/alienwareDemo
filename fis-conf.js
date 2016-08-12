// 对 CSS 进行压缩,prod流程才对css进行压缩
fis.media('prod').match('*.css', {
	// fis-optimizer-clean-css 插件进行压缩，已内置
	optimizer: fis.plugin('clean-css')
});

// 对 JS 进行压缩,prod流程才对js进行压缩
fis.media('prod').match('*.js', {
	// fis-optimizer-uglify-js 插件进行压缩，已内置
	optimizer: fis.plugin('uglify-js')
});

// 对 PNG 进行压缩,prod流程才对PNG进行压缩
fis.media('prod').match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});