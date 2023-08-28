import{a as e,r as o}from"./react-78128977.js";import{g as r,c as t,u as n,a,I as l}from"./@ant-design-2c3d6efa.js";import{c as i,u as c,b as s,i as d,m as g}from"./rc-util-1d95ea5a.js";import"./react-is-80a4043c.js";import{P as p,z as m}from"./rc-pagination-108e6f99.js";import{l as u,z as b}from"./rc-picker-a2d9a7b4.js";import{T as x}from"./@ctrl-4982d949.js";import{M as f}from"./rc-motion-50a39d70.js";import{i as h}from"./@babel-9fa0b289.js";const v="5.8.4",S=e=>{const{controlHeight:o}=e;return{controlHeightSM:.75*o,controlHeightXS:.5*o,controlHeightLG:1.25*o}};const y={blue:"#1677ff",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#eb2f96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},O=Object.assign(Object.assign({},y),{colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorLink:"",colorTextBase:"",colorBgBase:"",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'",fontFamilyCode:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1,motion:!0});const $=e=>{let o=e,r=e,t=e,n=e;return e<6&&e>=5?o=e+1:e<16&&e>=6?o=e+2:e>=16&&(o=16),e<7&&e>=5?r=4:e<8&&e>=7?r=5:e<14&&e>=8?r=6:e<16&&e>=14?r=7:e>=16&&(r=8),e<6&&e>=2?t=1:e>=6&&(t=2),e>4&&e<8?n=4:e>=8&&(n=6),{borderRadius:e>16?16:e,borderRadiusXS:t,borderRadiusSM:r,borderRadiusLG:o,borderRadiusOuter:n}};const P=(e,o)=>new x(e).setAlpha(o).toRgbString(),C=(e,o)=>new x(e).darken(o).toHexString(),j=e=>{const o=r(e);return{1:o[0],2:o[1],3:o[2],4:o[3],5:o[4],6:o[5],7:o[6],8:o[4],9:o[5],10:o[6]}},T=(e,o)=>{const r=e||"#fff",t=o||"#000";return{colorBgBase:r,colorTextBase:t,colorText:P(t,.88),colorTextSecondary:P(t,.65),colorTextTertiary:P(t,.45),colorTextQuaternary:P(t,.25),colorFill:P(t,.15),colorFillSecondary:P(t,.06),colorFillTertiary:P(t,.04),colorFillQuaternary:P(t,.02),colorBgLayout:C(r,4),colorBgContainer:C(r,0),colorBgElevated:C(r,0),colorBgSpotlight:P(t,.85),colorBorder:C(r,15),colorBorderSecondary:C(r,6)}};const w=e=>{const o=function(e){const o=new Array(10).fill(null).map(((o,r)=>{const t=r-1,n=e*Math.pow(2.71828,t/5),a=r>1?Math.floor(n):Math.ceil(n);return 2*Math.floor(a/2)}));return o[1]=e,o.map((e=>({size:e,lineHeight:(e+8)/e})))}(e),r=o.map((e=>e.size)),t=o.map((e=>e.lineHeight));return{fontSizeSM:r[0],fontSize:r[1],fontSizeLG:r[2],fontSizeXL:r[3],fontSizeHeading1:r[6],fontSizeHeading2:r[5],fontSizeHeading3:r[4],fontSizeHeading4:r[3],fontSizeHeading5:r[2],lineHeight:t[1],lineHeightLG:t[2],lineHeightSM:t[0],lineHeightHeading1:t[6],lineHeightHeading2:t[5],lineHeightHeading3:t[4],lineHeightHeading4:t[3],lineHeightHeading5:t[2]}};const M=t((function(e){const o=Object.keys(y).map((o=>{const t=r(e[o]);return new Array(10).fill(1).reduce(((e,r,n)=>(e[`${o}-${n+1}`]=t[n],e[`${o}${n+1}`]=t[n],e)),{})})).reduce(((e,o)=>e=Object.assign(Object.assign({},e),o)),{});return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},e),o),function(e,o){let{generateColorPalettes:r,generateNeutralColorPalettes:t}=o;const{colorSuccess:n,colorWarning:a,colorError:l,colorInfo:i,colorPrimary:c,colorBgBase:s,colorTextBase:d}=e,g=r(c),p=r(n),m=r(a),u=r(l),b=r(i),f=t(s,d),h=r(e.colorLink||e.colorInfo);return Object.assign(Object.assign({},f),{colorPrimaryBg:g[1],colorPrimaryBgHover:g[2],colorPrimaryBorder:g[3],colorPrimaryBorderHover:g[4],colorPrimaryHover:g[5],colorPrimary:g[6],colorPrimaryActive:g[7],colorPrimaryTextHover:g[8],colorPrimaryText:g[9],colorPrimaryTextActive:g[10],colorSuccessBg:p[1],colorSuccessBgHover:p[2],colorSuccessBorder:p[3],colorSuccessBorderHover:p[4],colorSuccessHover:p[4],colorSuccess:p[6],colorSuccessActive:p[7],colorSuccessTextHover:p[8],colorSuccessText:p[9],colorSuccessTextActive:p[10],colorErrorBg:u[1],colorErrorBgHover:u[2],colorErrorBorder:u[3],colorErrorBorderHover:u[4],colorErrorHover:u[5],colorError:u[6],colorErrorActive:u[7],colorErrorTextHover:u[8],colorErrorText:u[9],colorErrorTextActive:u[10],colorWarningBg:m[1],colorWarningBgHover:m[2],colorWarningBorder:m[3],colorWarningBorderHover:m[4],colorWarningHover:m[4],colorWarning:m[6],colorWarningActive:m[7],colorWarningTextHover:m[8],colorWarningText:m[9],colorWarningTextActive:m[10],colorInfoBg:b[1],colorInfoBgHover:b[2],colorInfoBorder:b[3],colorInfoBorderHover:b[4],colorInfoHover:b[4],colorInfo:b[6],colorInfoActive:b[7],colorInfoTextHover:b[8],colorInfoText:b[9],colorInfoTextActive:b[10],colorLinkHover:h[4],colorLink:h[6],colorLinkActive:h[7],colorBgMask:new x("#000").setAlpha(.45).toRgbString(),colorWhite:"#fff"})}(e,{generateColorPalettes:j,generateNeutralColorPalettes:T})),w(e.fontSize)),function(e){const{sizeUnit:o,sizeStep:r}=e;return{sizeXXL:o*(r+8),sizeXL:o*(r+4),sizeLG:o*(r+2),sizeMD:o*(r+1),sizeMS:o*r,size:o*r,sizeSM:o*(r-1),sizeXS:o*(r-2),sizeXXS:o*(r-3)}}(e)),S(e)),function(e){const{motionUnit:o,motionBase:r,borderRadius:t,lineWidth:n}=e;return Object.assign({motionDurationFast:`${(r+o).toFixed(1)}s`,motionDurationMid:`${(r+2*o).toFixed(1)}s`,motionDurationSlow:`${(r+3*o).toFixed(1)}s`,lineWidthBold:n+1},$(t))}(e))})),k={token:O,hashed:!0},z=e.createContext(k);function E(e){return e>=0&&e<=255}function B(e,o){const{r:r,g:t,b:n,a:a}=new x(e).toRgb();if(a<1)return e;const{r:l,g:i,b:c}=new x(o).toRgb();for(let s=.01;s<=1;s+=.01){const e=Math.round((r-l*(1-s))/s),o=Math.round((t-i*(1-s))/s),a=Math.round((n-c*(1-s))/s);if(E(e)&&E(o)&&E(a))return new x({r:e,g:o,b:a,a:Math.round(100*s)/100}).toRgbString()}return new x({r:r,g:t,b:n,a:1}).toRgbString()}var H=globalThis&&globalThis.__rest||function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]])}return r};function A(e){const{override:o}=e,r=H(e,["override"]),t=Object.assign({},o);Object.keys(O).forEach((e=>{delete t[e]}));const n=Object.assign(Object.assign({},r),t),a=1200,l=1600;if(!1===n.motion){const e="0s";n.motionDurationFast=e,n.motionDurationMid=e,n.motionDurationSlow=e}return Object.assign(Object.assign(Object.assign({},n),{colorFillContent:n.colorFillSecondary,colorFillContentHover:n.colorFill,colorFillAlter:n.colorFillQuaternary,colorBgContainerDisabled:n.colorFillTertiary,colorBorderBg:n.colorBgContainer,colorSplit:B(n.colorBorderSecondary,n.colorBgContainer),colorTextPlaceholder:n.colorTextQuaternary,colorTextDisabled:n.colorTextQuaternary,colorTextHeading:n.colorText,colorTextLabel:n.colorTextSecondary,colorTextDescription:n.colorTextTertiary,colorTextLightSolid:n.colorWhite,colorHighlight:n.colorError,colorBgTextHover:n.colorFillSecondary,colorBgTextActive:n.colorFill,colorIcon:n.colorTextTertiary,colorIconHover:n.colorText,colorErrorOutline:B(n.colorErrorBg,n.colorBgContainer),colorWarningOutline:B(n.colorWarningBg,n.colorBgContainer),fontSizeIcon:n.fontSizeSM,lineWidthFocus:4*n.lineWidth,lineWidth:n.lineWidth,controlOutlineWidth:2*n.lineWidth,controlInteractiveSize:n.controlHeight/2,controlItemBgHover:n.colorFillTertiary,controlItemBgActive:n.colorPrimaryBg,controlItemBgActiveHover:n.colorPrimaryBgHover,controlItemBgActiveDisabled:n.colorFill,controlTmpOutline:n.colorFillQuaternary,controlOutline:B(n.colorPrimaryBg,n.colorBgContainer),lineType:n.lineType,borderRadius:n.borderRadius,borderRadiusXS:n.borderRadiusXS,borderRadiusSM:n.borderRadiusSM,borderRadiusLG:n.borderRadiusLG,fontWeightStrong:600,opacityLoading:.65,linkDecoration:"none",linkHoverDecoration:"none",linkFocusDecoration:"none",controlPaddingHorizontal:12,controlPaddingHorizontalSM:8,paddingXXS:n.sizeXXS,paddingXS:n.sizeXS,paddingSM:n.sizeSM,padding:n.size,paddingMD:n.sizeMD,paddingLG:n.sizeLG,paddingXL:n.sizeXL,paddingContentHorizontalLG:n.sizeLG,paddingContentVerticalLG:n.sizeMS,paddingContentHorizontal:n.sizeMS,paddingContentVertical:n.sizeSM,paddingContentHorizontalSM:n.size,paddingContentVerticalSM:n.sizeXS,marginXXS:n.sizeXXS,marginXS:n.sizeXS,marginSM:n.sizeSM,margin:n.size,marginMD:n.sizeMD,marginLG:n.sizeLG,marginXL:n.sizeXL,marginXXL:n.sizeXXL,boxShadow:"\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",boxShadowSecondary:"\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",boxShadowTertiary:"\n      0 1px 2px 0 rgba(0, 0, 0, 0.03),\n      0 1px 6px -1px rgba(0, 0, 0, 0.02),\n      0 2px 4px 0 rgba(0, 0, 0, 0.02)\n    ",screenXS:480,screenXSMin:480,screenXSMax:575,screenSM:576,screenSMMin:576,screenSMMax:767,screenMD:768,screenMDMin:768,screenMDMax:991,screenLG:992,screenLGMin:992,screenLGMax:1199,screenXL:a,screenXLMin:a,screenXLMax:1599,screenXXL:l,screenXXLMin:l,boxShadowPopoverArrow:"2px 2px 5px rgba(0, 0, 0, 0.05)",boxShadowCard:`\n      0 1px 2px -2px ${new x("rgba(0, 0, 0, 0.16)").toRgbString()},\n      0 3px 6px 0 ${new x("rgba(0, 0, 0, 0.12)").toRgbString()},\n      0 5px 12px 4px ${new x("rgba(0, 0, 0, 0.09)").toRgbString()}\n    `,boxShadowDrawerRight:"\n      -6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      -3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      -9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",boxShadowDrawerLeft:"\n      6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",boxShadowDrawerUp:"\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",boxShadowDrawerDown:"\n      0 -6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 -3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 -9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",boxShadowTabsOverflowLeft:"inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowRight:"inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowTop:"inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowBottom:"inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"}),t)}var I=globalThis&&globalThis.__rest||function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]])}return r};const F=(e,o,r)=>{const t=r.getDerivativeToken(e),{override:n}=o,a=I(o,["override"]);let l=Object.assign(Object.assign({},t),{override:n});return l=A(l),a&&Object.entries(a).forEach((e=>{let[o,r]=e;const{theme:t}=r,n=I(r,["theme"]);let a=n;t&&(a=F(Object.assign(Object.assign({},l),n),{override:n},t)),l[o]=a})),l};function L(){const{token:o,hashed:r,theme:t,components:a}=e.useContext(z),l=`${v}-${r||""}`,i=t||M,[c,s]=n(i,[O,o],{salt:l,override:Object.assign({override:o},a),getComputedToken:F,formatToken:A});return[i,c,r?s:""]}const R="anticon",X=o.createContext({getPrefixCls:(e,o)=>o||(e?`ant-${e}`:"ant"),iconPrefixCls:R}),D=(e,o)=>{const[r,t]=L();return a({theme:r,token:t,hashId:"",path:["ant-design-icons",e],nonce:()=>null==o?void 0:o.nonce},(()=>[{[`.${e}`]:Object.assign(Object.assign({},{display:"inline-flex",alignItems:"center",color:"inherit",fontStyle:"normal",lineHeight:0,textAlign:"center",textTransform:"none",verticalAlign:"-0.125em",textRendering:"optimizeLegibility","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","> *":{lineHeight:1},svg:{display:"inline-block"}}),{[`.${e} .${e}-icon`]:{display:"block"}})}]))},W=o.createContext(void 0),_={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},G={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},u),timePickerLocale:Object.assign({},_)},U="${label} is not a valid ${type}",N={locale:"en",Pagination:p,DatePicker:G,TimePicker:_,Calendar:G,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:U,method:U,array:U,object:U,number:U,date:U,boolean:U,integer:U,float:U,regexp:U,email:U,url:U,hex:U},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh"},ColorPicker:{presetEmpty:"Empty"}};Object.assign({},N.Modal);let Q=[];const q=()=>Q.reduce(((e,o)=>Object.assign(Object.assign({},e),o)),N.Modal);const V=o.createContext(void 0),K=e=>{const{locale:r={},children:t,_ANT_MARK__:n}=e;o.useEffect((()=>{const e=function(e){if(e){const o=Object.assign({},e);return Q.push(o),q(),()=>{Q=Q.filter((e=>e!==o)),q()}}Object.assign({},N.Modal)}(r&&r.Modal);return e}),[r]);const a=o.useMemo((()=>Object.assign(Object.assign({},r),{exist:!0})),[r]);return o.createElement(V.Provider,{value:a},t)},Y=`-ant-${Date.now()}-${Math.random()}`;function J(e,o){const t=function(e,o){const t={},n=(e,o)=>{let r=e.clone();return r=(null==o?void 0:o(r))||r,r.toRgbString()},a=(e,o)=>{const a=new x(e),l=r(a.toRgbString());t[`${o}-color`]=n(a),t[`${o}-color-disabled`]=l[1],t[`${o}-color-hover`]=l[4],t[`${o}-color-active`]=l[6],t[`${o}-color-outline`]=a.clone().setAlpha(.2).toRgbString(),t[`${o}-color-deprecated-bg`]=l[0],t[`${o}-color-deprecated-border`]=l[2]};if(o.primaryColor){a(o.primaryColor,"primary");const e=new x(o.primaryColor),l=r(e.toRgbString());l.forEach(((e,o)=>{t[`primary-${o+1}`]=e})),t["primary-color-deprecated-l-35"]=n(e,(e=>e.lighten(35))),t["primary-color-deprecated-l-20"]=n(e,(e=>e.lighten(20))),t["primary-color-deprecated-t-20"]=n(e,(e=>e.tint(20))),t["primary-color-deprecated-t-50"]=n(e,(e=>e.tint(50))),t["primary-color-deprecated-f-12"]=n(e,(e=>e.setAlpha(.12*e.getAlpha())));const i=new x(l[0]);t["primary-color-active-deprecated-f-30"]=n(i,(e=>e.setAlpha(.3*e.getAlpha()))),t["primary-color-active-deprecated-d-02"]=n(i,(e=>e.darken(2)))}return o.successColor&&a(o.successColor,"success"),o.warningColor&&a(o.warningColor,"warning"),o.errorColor&&a(o.errorColor,"error"),o.infoColor&&a(o.infoColor,"info"),`\n  :root {\n    ${Object.keys(t).map((o=>`--${e}-${o}: ${t[o]};`)).join("\n")}\n  }\n  `.trim()}(e,o);i()&&c(t,`${Y}-dynamic-theme`)}const Z=o.createContext(!1),ee=e=>{let{children:r,disabled:t}=e;const n=o.useContext(Z);return o.createElement(Z.Provider,{value:null!=t?t:n},r)},oe=Z,re=o.createContext(void 0),te=e=>{let{children:r,size:t}=e;const n=o.useContext(re);return o.createElement(re.Provider,{value:t||n},r)},ne=re;function ae(e){const{children:r}=e,[,t]=L(),{motion:n}=t,a=o.useRef(!1);return a.current=a.current||!1===n,a.current?o.createElement(f,{motion:n},r):r}var le=globalThis&&globalThis.__rest||function(e,o){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]])}return r};const ie=["getTargetContainer","getPopupContainer","renderEmpty","pageHeader","input","pagination","form","select","button"];let ce;const se=e=>{const{children:r,csp:n,autoInsertSpaceInButton:a,alert:i,anchor:c,form:p,locale:m,componentSize:u,direction:b,space:x,virtual:f,dropdownMatchSelectWidth:h,popupMatchSelectWidth:v,popupOverflow:S,legacyLocale:y,parentContext:$,iconPrefixCls:P,theme:C,componentDisabled:j,segmented:T,statistic:w,spin:E,calendar:B,carousel:H,cascader:A,collapse:I,typography:F,checkbox:L,descriptions:_,divider:G,drawer:U,skeleton:Q,steps:q,image:V,layout:Y,list:J,mentions:Z,modal:oe,progress:re,result:ne,slider:ce,breadcrumb:se,menu:de,pagination:ge,input:pe,empty:me,badge:ue,radio:be,rate:xe,switch:fe,transfer:he,avatar:ve,message:Se,tag:ye,table:Oe,card:$e,tabs:Pe,timeline:Ce,timePicker:je,upload:Te,notification:we,tree:Me,colorPicker:ke,datePicker:ze,wave:Ee}=e,Be=o.useCallback(((o,r)=>{const{prefixCls:t}=e;if(r)return r;const n=t||$.getPrefixCls("");return o?`${n}-${o}`:n}),[$.getPrefixCls,e.prefixCls]),He=P||$.iconPrefixCls||R,Ae=He!==$.iconPrefixCls,Ie=n||$.csp,Fe=D(He,Ie),Le=function(e,o){const r=e||{},t=!1!==r.inherit&&o?o:k;return s((()=>{if(!e)return o;const n=Object.assign({},t.components);return Object.keys(e.components||{}).forEach((o=>{n[o]=Object.assign(Object.assign({},n[o]),e.components[o])})),Object.assign(Object.assign(Object.assign({},t),r),{token:Object.assign(Object.assign({},t.token),r.token),components:n})}),[r,t],((e,o)=>e.some(((e,r)=>{const t=o[r];return!d(e,t,!0)}))))}(C,$.theme),Re={csp:Ie,autoInsertSpaceInButton:a,alert:i,anchor:c,locale:m||y,direction:b,space:x,virtual:f,popupMatchSelectWidth:null!=v?v:h,popupOverflow:S,getPrefixCls:Be,iconPrefixCls:He,theme:Le,segmented:T,statistic:w,spin:E,calendar:B,carousel:H,cascader:A,collapse:I,typography:F,checkbox:L,descriptions:_,divider:G,drawer:U,skeleton:Q,steps:q,image:V,input:pe,layout:Y,list:J,mentions:Z,modal:oe,progress:re,result:ne,slider:ce,breadcrumb:se,menu:de,pagination:ge,empty:me,badge:ue,radio:be,rate:xe,switch:fe,transfer:he,avatar:ve,message:Se,tag:ye,table:Oe,card:$e,tabs:Pe,timeline:Ce,timePicker:je,upload:Te,notification:we,tree:Me,colorPicker:ke,datePicker:ze,wave:Ee},Xe=Object.assign({},$);Object.keys(Re).forEach((e=>{void 0!==Re[e]&&(Xe[e]=Re[e])})),ie.forEach((o=>{const r=e[o];r&&(Xe[o]=r)}));const De=s((()=>Xe),Xe,((e,o)=>{const r=Object.keys(e),t=Object.keys(o);return r.length!==t.length||r.some((r=>e[r]!==o[r]))})),We=o.useMemo((()=>({prefixCls:He,csp:Ie})),[He,Ie]);let _e=Ae?Fe(r):r;const Ge=o.useMemo((()=>{var e,o,r,t;return g((null===(e=N.Form)||void 0===e?void 0:e.defaultValidateMessages)||{},(null===(r=null===(o=De.locale)||void 0===o?void 0:o.Form)||void 0===r?void 0:r.defaultValidateMessages)||{},(null===(t=De.form)||void 0===t?void 0:t.validateMessages)||{},(null==p?void 0:p.validateMessages)||{})}),[De,null==p?void 0:p.validateMessages]);Object.keys(Ge).length>0&&(_e=o.createElement(W.Provider,{value:Ge},r)),m&&(_e=o.createElement(K,{locale:m,_ANT_MARK__:"internalMark"},_e)),(He||Ie)&&(_e=o.createElement(l.Provider,{value:We},_e)),u&&(_e=o.createElement(te,{size:u},_e)),_e=o.createElement(ae,null,_e);const Ue=o.useMemo((()=>{const e=Le||{},{algorithm:o,token:r,components:n}=e,a=le(e,["algorithm","token","components"]),l=o&&(!Array.isArray(o)||o.length>0)?t(o):M,i={};return Object.entries(n||{}).forEach((e=>{let[o,r]=e;const n=Object.assign({},r);"algorithm"in n&&(!0===n.algorithm?n.theme=l:(Array.isArray(n.algorithm)||"function"==typeof n.algorithm)&&(n.theme=t(n.algorithm)),delete n.algorithm),i[o]=n})),Object.assign(Object.assign({},a),{theme:l,token:Object.assign(Object.assign({},O),r),components:i})}),[Le]);return C&&(_e=o.createElement(z.Provider,{value:Ue},_e)),void 0!==j&&(_e=o.createElement(ee,{disabled:j},_e)),o.createElement(X.Provider,{value:De},_e)},de=e=>{const r=o.useContext(X),t=o.useContext(V);return o.createElement(se,Object.assign({parentContext:r,legacyLocale:t},e))};de.ConfigContext=X,de.SizeContext=ne,de.config=e=>{let{prefixCls:o,iconPrefixCls:r,theme:t}=e;void 0!==o&&(ce=o),t&&function(e){return Object.keys(e).some((e=>e.endsWith("Color")))}(t)&&J(ce||"ant",t)},de.useConfig=function(){return{componentDisabled:o.useContext(oe),componentSize:o.useContext(ne)}},Object.defineProperty(de,"SizeContext",{get:()=>ne});const ge=de;var pe={},me={},ue={},be={};Object.defineProperty(be,"__esModule",{value:!0}),be.default=void 0;var xe={placeholder:"请选择时间",rangePlaceholder:["开始时间","结束时间"]};be.default=xe;var fe=h.default;Object.defineProperty(ue,"__esModule",{value:!0}),ue.default=void 0;var he=fe(b),ve=fe(be);const Se={lang:Object.assign({placeholder:"请选择日期",yearPlaceholder:"请选择年份",quarterPlaceholder:"请选择季度",monthPlaceholder:"请选择月份",weekPlaceholder:"请选择周",rangePlaceholder:["开始日期","结束日期"],rangeYearPlaceholder:["开始年份","结束年份"],rangeMonthPlaceholder:["开始月份","结束月份"],rangeQuarterPlaceholder:["开始季度","结束季度"],rangeWeekPlaceholder:["开始周","结束周"]},he.default),timePickerLocale:Object.assign({},ve.default)};Se.lang.ok="确定";var ye=Se;ue.default=ye;var Oe=h.default;Object.defineProperty(me,"__esModule",{value:!0}),me.default=void 0;var $e=Oe(ue).default;me.default=$e;var Pe=h.default;Object.defineProperty(pe,"__esModule",{value:!0});var Ce=pe.default=void 0,je=Pe(m),Te=Pe(me),we=Pe(ue),Me=Pe(be);const ke="${label}不是一个有效的${type}";var ze={locale:"zh-cn",Pagination:je.default,DatePicker:we.default,TimePicker:Me.default,Calendar:Te.default,global:{placeholder:"请选择"},Table:{filterTitle:"筛选",filterConfirm:"确定",filterReset:"重置",filterEmptyText:"无筛选项",filterCheckall:"全选",filterSearchPlaceholder:"在筛选项中搜索",selectAll:"全选当页",selectInvert:"反选当页",selectNone:"清空所有",selectionAll:"全选所有",sortTitle:"排序",expand:"展开行",collapse:"关闭行",triggerDesc:"点击降序",triggerAsc:"点击升序",cancelSort:"取消排序"},Modal:{okText:"确定",cancelText:"取消",justOkText:"知道了"},Tour:{Next:"下一步",Previous:"上一步",Finish:"结束导览"},Popconfirm:{cancelText:"取消",okText:"确定"},Transfer:{titles:["",""],searchPlaceholder:"请输入搜索内容",itemUnit:"项",itemsUnit:"项",remove:"删除",selectCurrent:"全选当页",removeCurrent:"删除当页",selectAll:"全选所有",removeAll:"删除全部",selectInvert:"反选当页"},Upload:{uploading:"文件上传中",removeFile:"删除文件",uploadError:"上传错误",previewFile:"预览文件",downloadFile:"下载文件"},Empty:{description:"暂无数据"},Icon:{icon:"图标"},Text:{edit:"编辑",copy:"复制",copied:"复制成功",expand:"展开"},PageHeader:{back:"返回"},Form:{optional:"（可选）",defaultValidateMessages:{default:"字段验证错误${label}",required:"请输入${label}",enum:"${label}必须是其中一个[${enum}]",whitespace:"${label}不能为空字符",date:{format:"${label}日期格式无效",parse:"${label}不能转换为日期",invalid:"${label}是一个无效日期"},types:{string:ke,method:ke,array:ke,object:ke,number:ke,date:ke,boolean:ke,integer:ke,float:ke,regexp:ke,email:ke,url:ke,hex:ke},string:{len:"${label}须为${len}个字符",min:"${label}最少${min}个字符",max:"${label}最多${max}个字符",range:"${label}须在${min}-${max}字符之间"},number:{len:"${label}必须等于${len}",min:"${label}最小值为${min}",max:"${label}最大值为${max}",range:"${label}须在${min}-${max}之间"},array:{len:"须为${len}个${label}",min:"最少${min}个${label}",max:"最多${max}个${label}",range:"${label}数量须在${min}-${max}之间"},pattern:{mismatch:"${label}与模式不匹配${pattern}"}}},Image:{preview:"预览"},QRCode:{expired:"二维码过期",refresh:"点击刷新"},ColorPicker:{presetEmpty:"暂无"}};Ce=pe.default=ze;export{ge as C,Ce as d};