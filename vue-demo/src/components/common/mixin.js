import { getStyle } from '../../config/mUtils'
import { imgBaseUrl } from '../../config/env'




/**
 * {directives}
 * {仍然需要对纯 DOM元素进行底层操作, 这时候就会用到自定义指令}
 * {这里的逻辑为用load-more判断滚动位置, 判断合适执行binding.value()}
 */
export const loadMore = {
	directives: {
		'load-more': {
			/**
			 * {bind只调用一次, #此处我认为就是往dom上添加原生方法}
			 * {el: 绑定的dom对象<div></div>这种}
			 * {binding: 对象}
			 * {	name: 指令名，不包括 v- 前缀}
			 * {	value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。}
			 */
			bind: (el, binding) => {
				
				let windowHeight = window.screen.height;
				let height;
				let setTop;
				let paddingBottom;
				let marginBottom;
				let requestFram;
				let oldScrollTop;
				let scrollEl;
				let heightEl;
				let scrollType = el.attributes.type && el.attributes.type.value;
				
				
				let scrollReduce = 2;
				if (scrollType == 2) {
					scrollEl = el;
					heightEl = el.children[0];
				} else {
					scrollEl = document.body;
					heightEl = el;
				}
				
				/**
				 * {scrollEl: }
				 * {heightEl: }
				 * {给el绑定事件}
				 */
				
				el.addEventListener('touchstart', () => {
					height = heightEl.clientHeight;
					if (scrollType == 2) {
						height = height
					}
					setTop = el.offsetTop;
					paddingBottom = getStyle(el, 'paddingBottom');
					marginBottom = getStyle(el, 'marginBottom');
				}, false)

				el.addEventListener('touchmove', () => {
					loadMore();
				}, false)

				el.addEventListener('touchend', () => {
					oldScrollTop = scrollEl.scrollTop;
					moveEnd();
				}, false)

				const moveEnd = () => {
					requestFram = requestAnimationFrame(() => {
						if (scrollEl.scrollTop != oldScrollTop) {
							oldScrollTop = scrollEl.scrollTop;
							moveEnd()
						} else {
							cancelAnimationFrame(requestFram);
							height = heightEl.clientHeight;
							loadMore();
						}
					})
				}

				const loadMore = () => {
					if (scrollEl.scrollTop + windowHeight >= height + setTop + paddingBottom + marginBottom - scrollReduce) {
						binding.value();
					}
				}
			},
			unbind: () => {}
		}
	}
};

export const getImgPath = {
	methods: {
		//传递过来的图片地址需要处理后才能正常使用
		getImgPath(path) {
			let suffix;
			if (!path) {
				return 'http://test.fe.ptdev.cn/elm/elmlogo.jpeg'
			}
			if (path.indexOf('jpeg') !== -1) {
				suffix = '.jpeg'
			} else {
				suffix = '.png'
			}
			let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix;
			return imgBaseUrl + url
		},
	}

}