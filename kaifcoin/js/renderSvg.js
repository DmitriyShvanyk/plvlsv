; (function () {

	"use strict";	

	// render svg
	function renderSvg(selector, xmlString) {
		const doc = new DOMParser().parseFromString(xmlString, 'application/xml');
		const elem = document.querySelector(selector);
		elem.appendChild(
			elem.ownerDocument.importNode(doc.documentElement, true)
		)
	}

	const svgHeaderLines = `<svg class="header__lines" width="1440" height="241" viewBox="0 0 1440 241" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g opacity="0.4" clip-path="url(#clipHeaderLines)">
		<path d="M1405.96 8.45776H1314.03H1222.1" stroke="white" stroke-miterlimit="10" />
		<path
			d="M1820.68 8.45776H1774.37H1544.2H1452.27L1405.96 54.7942H1314.03H1222.1L1175.79 8.45776H1083.86H1037.55M991.24 54.7942H944.93H991.24Z"
			stroke="white" stroke-miterlimit="10" />
		<path
			d="M714.76 8.45776H761.071M806.69 54.7942H853H899.311L945.621 8.45776H991.931L1038.24 54.7942H1084.55H1176.48H806.69Z"
			stroke="white" stroke-miterlimit="10" />
		<path d="M899.311 8.45776H853H806.69L760.379 54.7942H714.76L668.45 8.45776H622.139H530.209"
			stroke="white" stroke-miterlimit="10" />
		<path d="M668.449 54.7942H622.139H530.209L483.899 8.45776H391.969H300.04" stroke="white"
			stroke-miterlimit="10" />
		<path d="M253.729 54.7942H161.8H69.8704" stroke="white" stroke-miterlimit="10" />
		<path d="M23.5601 8.45776H-68.3695H-114.68M-160.99 54.7942H-207.301H-160.99Z" stroke="white"
			stroke-miterlimit="10" />
		<path
			d="M484.59 54.7942H392.661H300.04L253.729 8.45776H161.8H69.8703L23.5599 54.7942H-68.3697H-114.68L-160.991 8.45776H-207.301L-252.92 54.7942H-299.231H-391.16"
			stroke="white" stroke-miterlimit="10" />
		<path
			d="M2097.16 92.8315H2005.23H1958.92L1912.61 139.168H1866.3L1819.99 92.8315H1773.68H1544.2H1314.03H1222.1"
			stroke="white" stroke-miterlimit="10" />
		<path
			d="M1820.68 139.168H1774.37H1544.2H1314.03H1222.1L1175.79 92.8315H1083.86H1037.55M991.24 139.168H944.93H991.24Z"
			stroke="white" stroke-miterlimit="10" />
		<path d="M899.311 92.8315H853H806.69M761.071 139.168H714.76H761.071Z" stroke="white"
			stroke-miterlimit="10" />
		<path d="M668.449 92.8315H622.139H530.209" stroke="white" stroke-miterlimit="10" />
		<path d="M23.5601 92.8315H69.8706M115.49 139.168H161.8H391.97H483.899H115.49Z" stroke="white"
			stroke-miterlimit="10" />
		<path
			d="M1175.79 139.168H1083.86H1037.55L991.24 92.8315H944.93L898.619 139.168H853H806.69L760.379 92.8315H714.76L668.45 139.168H622.139H530.21L483.899 92.8315H391.97H161.8H115.49L69.1793 139.168H23.56L-22.7505 92.8315H-69.0607H-160.99"
			stroke="white" stroke-miterlimit="10" />
		<path d="M1405.96 177.205H1314.03H1267.72M1221.41 223.542H1175.1H1221.41Z" stroke="white"
			stroke-miterlimit="10" />
		<path
			d="M2511.88 223.542H2465.57H2235.4H2189.09L2142.78 177.205H2097.16L2050.85 223.542H2004.54H1958.92L1912.61 177.205H1866.3L1819.99 223.542H1773.68H1682.44L1636.13 177.205H1544.2H1452.27L1405.96 223.542H1314.03H1267.72L1221.41 177.205H1175.1L1128.79 223.542H1082.48H991.24"
			stroke="white" stroke-miterlimit="10" />
		<path d="M1129.48 177.205H1083.17H991.24L944.93 223.542H853H622.83H530.901" stroke="white"
			stroke-miterlimit="10" />
		<path d="M484.59 177.205H392.661H300.04" stroke="white" stroke-miterlimit="10" />
		<path d="M253.729 223.542H161.8H69.8704" stroke="white" stroke-miterlimit="10" />
		<path
			d="M944.93 177.205H853H622.831H530.901L484.591 223.542H392.661H300.04L253.73 177.205H161.8H69.8705L23.56 223.542H-68.3696H-160.299"
			stroke="white" stroke-miterlimit="10" />
		<path d="M23.5601 177.205H-68.3695H-160.299L-206.61 223.542H-298.539H-391.16" stroke="white"
			stroke-miterlimit="10" />
	</g>
	<g filter="url(#filterHeaderB1)">
		<rect x="1323" y="92" width="60" height="2" fill="#7549F1" />
	</g>
	<g filter="url(#filterHeaderB2)">
		<rect x="1251" y="54" width="61" height="2" fill="#7549F1" />
	</g>
	<g filter="url(#filterHeaderB3)">
		<rect x="118" y="176" width="103" height="2" fill="#7549F1" />
	</g>
	<g filter="url(#filterHeaderB4)">
		<rect x="87" y="223" width="62" height="2" fill="#7549F1" />
	</g>
	<g filter="url(#filterHeaderB5)">
		<rect x="97" y="8" width="38" height="2" fill="#7549F1" />
	</g>
	<g filter="url(#filterHeaderB6)">
		<rect x="1309" y="176" width="38" height="2" fill="#7549F1" />
	</g>
	<defs>
		<filter id="filterHeaderB1" x="1311" y="84" width="84" height="26" filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dy="4" />
			<feGaussianBlur stdDeviation="6" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix"
				values="0 0 0 0 0.458824 0 0 0 0 0.286275 0 0 0 0 0.945098 0 0 0 1 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303:146" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303:146" result="shape" />
		</filter>
		<filter id="filterHeaderB2" x="1239" y="46" width="85" height="26" filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dy="4" />
			<feGaussianBlur stdDeviation="6" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix"
				values="0 0 0 0 0.458824 0 0 0 0 0.286275 0 0 0 0 0.945098 0 0 0 1 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303:146" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303:146" result="shape" />
		</filter>
		<filter id="filterHeaderB3" x="106" y="168" width="127" height="26" filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dy="4" />
			<feGaussianBlur stdDeviation="6" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix"
				values="0 0 0 0 0.458824 0 0 0 0 0.286275 0 0 0 0 0.945098 0 0 0 1 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303:146" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303:146" result="shape" />
		</filter>
		<filter id="filterHeaderB4" x="75" y="215" width="86" height="26" filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dy="4" />
			<feGaussianBlur stdDeviation="6" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix"
				values="0 0 0 0 0.458824 0 0 0 0 0.286275 0 0 0 0 0.945098 0 0 0 1 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303:146" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303:146" result="shape" />
		</filter>
		<filter id="filterHeaderB5" x="85" y="0" width="62" height="26" filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dy="4" />
			<feGaussianBlur stdDeviation="6" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix"
				values="0 0 0 0 0.458824 0 0 0 0 0.286275 0 0 0 0 0.945098 0 0 0 1 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303:146" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303:146" result="shape" />
		</filter>
		<filter id="filterHeaderB6" x="1297" y="168" width="62" height="26" filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha" />
			<feOffset dy="4" />
			<feGaussianBlur stdDeviation="6" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix type="matrix"
				values="0 0 0 0 0.458824 0 0 0 0 0.286275 0 0 0 0 0.945098 0 0 0 1 0" />
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303:146" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303:146" result="shape" />
		</filter>
		<clipPath id="clipHeaderLines">
			<rect width="6912" height="222" fill="white" transform="translate(-2603 4.99976)" />
		</clipPath>
	</defs>
</svg>`

	const svgSprites = `<svg class="sr-only" version="1.1" height="0" xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink">
	<symbol id="i-check" viewBox="0 0 24 24">
		<path d="M9 19.414L2.293 12.707L3.707 11.293L9 16.586L20.293 5.29297L21.707 6.70697L9 19.414Z"
			fill="currentColor" />
	</symbol>
	<symbol id="i-tw" viewBox="0 0 20 21">
		<g clip-path="url(#clipTw)">
			<path
				d="M19.1668 2.84481C18.3688 3.4077 17.4852 3.83823 16.5501 4.11981C16.0483 3.54273 15.3813 3.13372 14.6393 2.94808C13.8974 2.76244 13.1164 2.80914 12.4019 3.08185C11.6874 3.35456 11.0738 3.84014 10.6443 4.4729C10.2147 5.10567 9.98989 5.85509 10.0001 6.61981V7.45314C8.53567 7.49111 7.08454 7.16632 5.77599 6.50768C4.46743 5.84904 3.34208 4.877 2.50015 3.67814C2.50015 3.67814 -0.833186 11.1781 6.66681 14.5115C4.95059 15.6764 2.90611 16.2606 0.833481 16.1781C8.33348 20.3448 17.5001 16.1781 17.5001 6.59481C17.4994 6.36268 17.4771 6.13113 17.4335 5.90314C18.284 5.06438 18.8842 4.0054 19.1668 2.84481Z"
				fill="currentColor" />
		</g>
		<defs>
			<clipPath id="clipTw">
				<rect width="20" height="20" fill="currentColor" transform="translate(0.000152588 0.344727)" />
			</clipPath>
		</defs>
	</symbol>
	<symbol id="i-fb" viewBox="0 0 22 23">
		<path
			d="M8.84799 14.3295L8.51715 18.9829C8.99049 18.9829 9.1955 18.7796 9.44134 18.5354L11.6606 16.4145L16.259 19.7821C17.1024 20.2521 17.6965 20.0046 17.924 19.0063L20.9424 4.8626L20.9433 4.86177C21.2108 3.61507 20.4924 3.12756 19.6707 3.4334L1.92866 10.2261C0.717794 10.6961 0.736128 11.3711 1.72282 11.6769L6.25876 13.0878L16.7948 6.49514C17.2907 6.1668 17.7415 6.34847 17.3707 6.67681L8.84799 14.3295Z"
			fill="currentColor" />
	</symbol>
	<symbol id="i-inst" viewBox="0 0 20 21">
		<g clip-path="url(#clipInst)">
			<path
				d="M14.1668 2.01123H5.83348C3.53229 2.01123 1.66681 3.87671 1.66681 6.1779V14.5112C1.66681 16.8124 3.53229 18.6779 5.83348 18.6779H14.1668C16.468 18.6779 18.3335 16.8124 18.3335 14.5112V6.1779C18.3335 3.87671 16.468 2.01123 14.1668 2.01123Z"
				stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			<path
				d="M13.3335 9.81998C13.4363 10.5135 13.3179 11.2218 12.995 11.8442C12.672 12.4665 12.1611 12.9712 11.5349 13.2864C10.9086 13.6016 10.1989 13.7113 9.50665 13.5999C8.81443 13.4885 8.17496 13.1617 7.6792 12.6659C7.18343 12.1702 6.85661 11.5307 6.74522 10.8385C6.63383 10.1463 6.74355 9.43656 7.05877 8.81029C7.37399 8.18402 7.87865 7.67309 8.50098 7.35018C9.12332 7.02726 9.83162 6.9088 10.5252 7.01164C11.2326 7.11655 11.8875 7.4462 12.3932 7.9519C12.8989 8.4576 13.2286 9.11254 13.3335 9.81998Z"
				stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M14.5835 5.76123H14.5918" stroke="currentColor" stroke-width="2" stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
		<defs>
			<clipPath id="clipInst">
				<rect width="20" height="20" fill="currentColor" transform="translate(0.000152588 0.344727)" />
			</clipPath>
		</defs>
	</symbol>
	<symbol id="i-m" viewBox="0 0 20 21">
		<g clip-path="url(#clipM)">
			<path
				d="M18.4043 4.28857L20.0002 2.7619V2.42773H14.4718L10.5318 12.2344L6.04932 2.42773H0.252653V2.7619L2.11682 5.00607C2.29849 5.1719 2.39349 5.4144 2.36932 5.65857V14.4777C2.42682 14.7952 2.32349 15.1219 2.10015 15.3527L0.000152588 17.8977V18.2277H5.95432V17.8936L3.85432 15.3527C3.62682 15.1211 3.51932 14.8002 3.56515 14.4777V6.8494L8.79182 18.2319H9.39932L13.8935 6.8494V15.9169C13.8935 16.1561 13.8935 16.2052 13.7368 16.3619L12.1202 17.9261V18.2611H19.9635V17.9269L18.4052 16.4011C18.2685 16.2977 18.1977 16.1244 18.2268 15.9561V4.73357C18.1977 4.5644 18.2677 4.39107 18.4043 4.28857Z"
				fill="currentColor" />
		</g>
		<defs>
			<clipPath id="clipM">
				<rect width="20" height="20" fill="currentColor" transform="translate(0.000152588 0.344727)" />
			</clipPath>
		</defs>
	</symbol>
	<symbol id="i-git" viewBox="0 0 20 21">
		<g clip-path="url(#clipGit)">
			<path
				d="M10.0002 0.761719C4.47515 0.761719 0.000152588 5.16172 0.000152588 10.5884C0.000152588 14.9309 2.86515 18.6134 6.83765 19.9117C7.33765 20.0042 7.52099 19.7001 7.52099 19.4392C7.52099 19.2059 7.51265 18.5876 7.50849 17.7684C4.72682 18.3609 4.14015 16.4501 4.14015 16.4501C3.68515 15.3159 3.02765 15.0126 3.02765 15.0126C2.12182 14.4034 3.09765 14.4159 3.09765 14.4159C4.10182 14.4842 4.62932 15.4284 4.62932 15.4284C5.52099 16.9309 6.97015 16.4967 7.54182 16.2459C7.63182 15.6101 7.88932 15.1776 8.17515 14.9317C5.95432 14.6859 3.62015 13.8409 3.62015 10.0759C3.62015 9.00339 4.00765 8.12672 4.64932 7.43922C4.53682 7.19089 4.19932 6.19172 4.73682 4.83839C4.73682 4.83839 5.57432 4.57505 7.48682 5.84589C8.28682 5.62755 9.13682 5.51922 9.98682 5.51422C10.8368 5.51922 11.6868 5.62755 12.4868 5.84589C14.3868 4.57505 15.2243 4.83839 15.2243 4.83839C15.7618 6.19172 15.4243 7.19089 15.3243 7.43922C15.9618 8.12672 16.3493 9.00339 16.3493 10.0759C16.3493 13.8509 14.0118 14.6817 11.7868 14.9234C12.1368 15.2184 12.4618 15.8209 12.4618 16.7417C12.4618 18.0567 12.4493 19.1134 12.4493 19.4326C12.4493 19.6901 12.6243 19.9976 13.1368 19.8992C17.1377 18.6092 20.0002 14.9242 20.0002 10.5884C20.0002 5.16172 15.5227 0.761719 10.0002 0.761719Z"
				fill="currentColor" />
		</g>
		<defs>
			<clipPath id="clipGit">
				<rect width="20" height="20" fill="currentColor" transform="translate(0.000152588 0.344727)" />
			</clipPath>
		</defs>
	</symbol>
</svg>`

	setTimeout(() => {
		renderSvg('body', svgSprites);
		renderSvg('.header', svgHeaderLines);
	}, 3000);


})();