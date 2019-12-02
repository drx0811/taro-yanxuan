if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../../app');
require('../../components/loading/index');
require('../../pages/home/banner/index');
require('../../pages/home/policy/index');
require('../../components/home-title/index');
require('../../pages/home/pin/index');
require('../../components/tag/index');
require('../../pages/home/recommend/index');
require('../../pages/cate/menu/index');
require('../../pages/cate/banner/index');
require('../../pages/cate/list/index');
require('../../pages/cate-sub/tab/index');
require('../../components/item-list/index');
require('../../pages/cart/empty/index');
require('../../components/button/index');
require('../../pages/cart/tip/index');
require('../../pages/cart/gift/index');
require('../../components/checkbox/index');
require('../../components/input-number/index');
require('../../pages/cart/list/index');
require('../../pages/cart/footer/index');
require('../../pages/user/profile/vip/index');
require('../../pages/user/profile/index');
require('../../pages/user/menu/index');
require('../../pages/user/activity/index');
require('../../pages/user-login/auth/index.weapp');
require('../../components/input-item/index');
require('../../pages/item/gallery/index');
require('../../pages/item/info-base/index');
require('../../pages/item/info-param/index');
require('../../pages/item/detail/index');
require('../../components/popup/index');
require('../../pages/item/spec/index');
require('../../pages/item/footer/index');
require('../../pages/home/home');
require('../../pages/cate/cate');
require('../../pages/cate-sub/cate-sub');
require('../../pages/cart/cart');
require('../../pages/user/user');
require('../../pages/user-login/user-login');
require('../../pages/user-login-email/user-login-email');
require('../../pages/item/item');
require('../../pages/webview/webview');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}