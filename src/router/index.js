import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import ParentView from '@/components/ParentView';


/**
 * Note: 路由配置项
 *
 * hidden: true                   // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true               // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect           // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'             // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
    noCache: true                // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    title: 'title'               // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             // 设置该路由的图标，对应路径src/assets/icons/svg
    breadcrumb: false            // 如果设置为false，则不会在breadcrumb面包屑中显示
  }
 */

// 公共路由
export const constantRoutes = [{
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [{
      path: '/redirect/:path(.*)',
      component: (resolve) => require(['@/views/redirect'], resolve)
    }]
  },
  {
    path: '/login',
    component: (resolve) => require(['@/views/login'], resolve),
    hidden: true
  },
  {
    path: '/editAccounts',
    component: (resolve) => require(['@/views/editAccounts'], resolve),
    hidden: true
  },
  {
    path: '/404',
    component: (resolve) => require(['@/views/error/404'], resolve),
    hidden: true
  },
  {
    path: '/401',
    component: (resolve) => require(['@/views/error/401'], resolve),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [{
      path: 'index',
      component: (resolve) => require(['@/views/index'], resolve),
      name: '首页',
      meta: {
        title: '首页',
        icon: 'chart',
        noCache: true,
        affix: true
      }
    }]
  },
  {
    // 会员管理
    path: '/member',
    component: Layout,
    redirect: '/member/shipperClient',
    meta: {
      title: '会员管理',
      icon: 'user',
      noCache: true,
      affix: true
    },
    hidden: true,
    children: [{
        path: 'client/add',
        component: (resolve) => require(['@/views/member/client/add/index'], resolve),
        name: 'ClientAdd',
        meta: {
          title: '客户添加'
        },
        hidden: true
      },
      {
        path: 'client/edit',
        component: (resolve) => require(['@/views/member/client/edit/index'], resolve),
        name: 'ClientEdit',
        meta: {
          title: '客户编辑'
        },
        hidden: true
      },

      //托运人管理
      //   {
      //     path: 'shipper/index',
      //     component: (resolve) => require(['@/views/member/shipper/index'], resolve),
      //     name: 'shipperIndex',
      //     meta: { title: '托运人管理', icon: '', noCache: true, affix: true }
      //   },
      {
        path: 'shipper/edit',
        component: (resolve) => require(['@/views/member/shipper/edit/index'], resolve),
        name: 'shipperEdit',
        meta: {
          title: '托运人审核'
        },
        hidden: true
      },
      {
        path: 'shipper/add',
        component: (resolve) => require(['@/views/member/shipper/add/index'], resolve),
        name: 'shipperAdd',
        meta: {
          title: '托运人添加'
        },
        hidden: true
      },
      //司机管理
      //   {
      //     path: 'driver/index',
      //     component: (resolve) => require(['@/views/member/driver/index'], resolve),
      //     name: '司机管理',
      //     meta: { title: '司机管理', icon: '', noCache: true, affix: true }
      //   },
      {
        path: 'driver/add',
        component: (resolve) => require(['@/views/member/driver/add/index'], resolve),
        name: '新增司机',
        meta: {
          title: '新增司机'
        },
        hidden: true
      },
      {
        path: 'driver/edit',
        component: (resolve) => require(['@/views/member/driver/edit/index'], resolve),
        name: '司机编辑',
        meta: {
          title: '司机编辑'
        },
        hidden: true
      },
      {
        path: 'driver/datail',
        component: (resolve) => require(['@/views/member/driver/datail/index'], resolve),
        name: '司机详情',
        meta: {
          title: '司机详情'
        },
        hidden: true
      },
      //收款人管理
      //   {
      //     path: 'payee/index',
      //     component: (resolve) => require(['@/views/member/payee/index'], resolve),
      //     name: '收款人管理',
      //     meta: { title: '收款人管理', icon: '', noCache: true, affix: true }
      //   },

      //船东管理
      //   {
      //     path: 'shipowner/index',
      //     component: (resolve) => require(['@/views/member/shipowner/index'], resolve),
      //     name: '船东管理',
      //     meta: { title: '船东管理-忽略', icon: '', noCache: true, affix: true }
      //   },
      //   {
      //     path: 'shipowner/edit',
      //     component: (resolve) => require(['@/views/member/shipowner/edit/index'], resolve),
      //     name: '编辑船东',
      //     meta:{ title:'编辑船东' },
      //     hidden:true
      //   },

      //车辆管理
      //   {
      //     path: 'car/index',
      //     component: (resolve) => require(['@/views/member/car/index'], resolve),
      //     name: '车辆管理',
      //     meta: { title: '车辆管理', icon: '', noCache: true, affix: true }
      //   },
      {
        path: 'car/add',
        component: (resolve) => require(['@/views/member/car/add/index'], resolve),
        name: '添加车辆',
        meta: {
          title: '添加车辆'
        },
        hidden: true
      },
      {
        path: 'car/edit',
        component: (resolve) => require(['@/views/member/car/edit/index'], resolve),
        name: '编辑车辆',
        meta: {
          title: '编辑车辆'
        },
        hidden: true
      },
      {
        path: 'car/datail',
        component: (resolve) => require(['@/views/member/car/datail/index'], resolve),
        name: '编辑车辆',
        meta: {
          title: '编辑车辆'
        },
        hidden: true
      },

      //船舶管理
      //   {
      //     path: 'ship/index',
      //     component: (resolve) => require(['@/views/member/ship/index'], resolve),
      //     name: '船舶管理',
      //     meta: { title: '船舶管理-忽略', icon: '', noCache: true, affix: true }
      //   },
      //   {
      //     path: 'ship/edit',
      //     component: (resolve) => require(['@/views/member/ship/edit/index'], resolve),
      //     name: '添加船舶',
      //     meta:{ title:'添加船舶' },
      //     hidden:true
      //   },
    ]
  },
  {
    path: '/business',
    component: Layout,
    redirect: '/business/carriageAudit',
    meta: {
      title: '业务管理',
      icon: 'clipboard',
      noCache: true,
      affix: true
    },
    hidden: true,
    children: [
      //运单审核
      //   {
      //     path: 'wayBill/index',
      //     component: (resolve) => require(['@/views/business/waybill/index'], resolve),
      //     name: '运单审核',
      //     meta: { title: '运单审核', icon: '', noCache: true, affix: true }
      //   },
      //运单详情
      {
        path: 'wayBill/info/index',
        component: (resolve) => require(['@/views/business/waybill/info/index'], resolve),
        name: '运单详情',
        meta: {
          title: '运单详情'
        },
        hidden: true
      },
      //付款审核
      //   {
      //     path: 'payment/index',
      //     component: (resolve) => require(['@/views/business/payment/index'], resolve),
      //     name: '付款审核',
      //     meta: { title: '付款审核', icon: '', noCache: true, affix: true }
      //   },
      //付款详情
      {
        path: 'payment/info',
        component: (resolve) => require(['@/views/business/payment/info/index'], resolve),
        name: 'info',
        meta: {
          title: '付款详情'
        },
        hidden: true
      },

      //销项发票审核
      //   {
      //     path: 'invoice/index',
      //     component: (resolve) => require(['@/views/business/invoice/index'], resolve),
      //     name: '销项发票审核',
      //     meta: { title: '销项发票审核', icon: '', noCache: true, affix: true }
      //   },
      //销项发票审核详情
      {
        path: 'invoice/info',
        component: (resolve) => require(['@/views/business/invoice/info/index'], resolve),
        name: '销项发票审核详情',
        meta: {
          title: '销项发票审核详情'
        },
        hidden: true
      },
      //销项发票详情
      {
        path: 'invoice/details',
        component: (resolve) => require(['@/views/business/invoice/details/index'], resolve),
        name: '销项发票详情',
        meta: {
          title: '销项发票详情'
        },
        hidden: true
      },
      //返利管理
      //   {
      //     path: 'rebate/index',
      //     component: (resolve) => require(['@/views/business/rebate/index'], resolve),
      //     name: '返利管理',
      //     meta: { title: '返利管理', icon: '', noCache: true, affix: true }
      //   },
      //发放记录
      {
        path: 'rebate/annal',
        component: (resolve) => require(['@/views/business/rebate/annal/index'], resolve),
        name: '发放记录',
        meta: {
          title: '发放记录'
        },
        hidden: true
      },
      //黑名单列表
      {
        path: 'rebate/black',
        component: (resolve) => require(['@/views/business/rebate/blackList/index'], resolve),
        name: '黑名单列表',
        meta: {
          title: '黑名单列表'
        },
        hidden: true
      },
    ]
  },
  {
    path: '/transport',
    component: Layout,
    redirect: '/transport/carriageManage',
    meta: {
      title: '运输管理',
      icon: 'monitor',
      noCache: true,
      affix: true
    },
    hidden: true,
    children: [
      //订单管理
      //   {
      //     path: 'order/index',
      //     component: (resolve) => require(['@/views/transport/order/index'], resolve),
      //     name: '订单管理',
      //     meta: { title: '订单管理', icon: '', noCache: true, affix: true }
      //   },
      //   // 订单详情
      //   {
      //     path: 'order/info',
      //     component: (resolve) => require(['@/views/transport/order/info/index'], resolve),
      //     name: '订单详情',
      //     meta: { title: '订单详情' },
      //     hidden: true
      //   },
      //   // 调度派车
      //   {
      //     path: 'dispatch/index',
      //     component: (resolve) => require(['@/views/transport/dispatch/index'], resolve),
      //     name: '调度派车',
      //     meta: { title: '调度派车' },
      //     hidden: true
      //   },
      //运单审核
      //   {
      //     path: 'waybill/index',
      //     component: (resolve) => require(['@/views/transport/waybill/index'], resolve),
      //     name: '运单管理',
      //     meta: { title: '运单管理', icon: '', noCache: true, affix: true }
      //   },

      // 运单编辑
      {
        path: 'waybill/edit',
        component: (resolve) => require(['@/views/transport/waybill/edit/index'], resolve),
        name: '运单编辑',
        meta: {
          title: '运单编辑'
        },
        hidden: true
      },
      // 运单详情
      {
        path: 'waybill/details',
        component: (resolve) => require(['@/views/transport/waybill/details/index'], resolve),
        name: '运单详情',
        meta: {
          title: '运单详情'
        },
        hidden: true
      },
      //合同管理
      //   {
      //     path: 'contract/index',
      //     component: (resolve) => require(['@/views/transport/contract/index'], resolve),
      //     name: '合同管理',
      //     meta: { title: '合同管理', icon: '', noCache: true, affix: true }
      //   },
      //合同
      {
        path: 'contract/details/index',
        component: (resolve) => require(['@/views/transport/contract/details/index'], resolve),
        name: '合同',
        meta: {
          title: '合同',
          icon: '',
          noCache: true,
          affix: true
        },
        hidden: true
      },
    ]
  },
  {
    path: '/finance',
    component: Layout,
    redirect: '/finance/FinancialRemittance',
    meta: {
      title: '财务管理',
      icon: 'money',
      noCache: true,
      affix: true
    },
    hidden: true,
    children: [
      //打款管理
      //   {
      //     path: 'pay/index',
      //     component: (resolve) => require(['@/views/finance/pay/index'], resolve),
      //     name: '打款管理',
      //     meta: { title: '打款管理', icon: '', noCache: true, affix: true }
      //   },


      //销项发票管理
      //   {
      //     path: 'invoice/index',
      //     component: (resolve) => require(['@/views/finance/invoice/index'], resolve),
      //     name: '销项发票管理',
      //     meta: { title: '销项发票管理', icon: '', noCache: true, affix: true }
      //   },
      // 发票管理
      {
        path: 'invoice/management',
        component: (resolve) => require(['@/views/finance/invoice/info/index'], resolve),
        name: 'management',
        meta: {
          title: '发票管理'
        },
        hidden: true
      },

      //ETC发票管理
      //   {
      //     path: 'invoice/etc',
      //     component: (resolve) => require(['@/views/finance/etc/index'], resolve),
      //     name: 'ETC发票管理',
      //     meta: { title: 'ETC发票管理', icon: '', noCache: true, affix: true }
      //   },

      //系统钱包管理
      //   {
      //     path: 'wallet/index',
      //     component: (resolve) => require(['@/views/finance/wallet/index'], resolve),
      //     name: '系统钱包管理',
      //     meta: { title: '系统钱包管理', icon: '', noCache: true, affix: true }
      //   },

      // 系统交易记录
      //    {
      //     path: 'record/index',
      //     component: (resolve) => require(['@/views/finance/record/index'], resolve),
      //     name: '系统交易记录',
      //     meta: { title: '系统交易记录',icon: '', noCache: true, affix: true },
      //   },
    ]
  },
  {
    path: '/feedback',
    component: Layout,
    redirect: '/feedback/consultFeedback',
    meta: {
      title: '用户反馈管理',
      icon: 'textarea',
      noCache: true,
      affix: true
    },
    hidden: true,
    children: [
      //咨询投诉
      //   {
      //     path: 'complaint/index',
      //     component: (resolve) => require(['@/views/feedback/complaint/index'], resolve),
      //     name: '咨询投诉',
      //     meta: { title: '咨询投诉', icon: '', noCache: true, affix: true }
      //   },
      //用户评价
      //   {
      //     path: 'evaluation/index',
      //     component: (resolve) => require(['@/views/feedback/evaluation/index'], resolve),
      //     name: '用户评价',
      //     meta: { title: '用户评价', icon: '', noCache: true, affix: true }
      //   }
    ]
  },
  //   {
  //     path: '/adminSystem',
  //     component: Layout,
  //     redirect: 'announcement/index',
  //     meta: {
  //       title: '系统管理',
  //       icon: 'dict',
  //       noCache: true,
  //       affix: true
  //     },
  //     hidden: true,
  //     children: [
  //公告管理
  //   {
  //     path: 'announcement/index',
  //     component: (resolve) => require(['@/views/adminSystem/announcement/index'], resolve),
  //     name: '公告管理',
  //     meta: { title: '公告管理', icon: '', noCache: true, affix: true }
  //   },
  //消息管理
  //   {
  //     path: 'news/index',
  //     component: (resolve) => require(['@/views/adminSystem/news/index'], resolve),
  //     name: '消息管理',
  //     meta: { title: '消息管理', icon: '', noCache: true, affix: true }
  //   },
  //     ]
  //   },
  // 下面的是废弃的
  // {
  //   path: '/user',
  //   component: Layout,
  //   hidden: true,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'profile',
  //       component: (resolve) => require(['@/views/system/user/profile/index'], resolve),
  //       name: 'Profile',
  //       meta: { title: '个人中心', icon: 'user' }
  //     }
  //   ]
  // },
  // {
  //   path: '/dict',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'type/data/:dictId(\\d+)',
  //       component: (resolve) => require(['@/views/system/dict/data'], resolve),
  //       name: 'Data',
  //       meta: { title: '字典数据', icon: '' }
  //     }
  //   ]
  // },
  // {
  //   path: '/job',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'log',
  //       component: (resolve) => require(['@/views/monitor/job/log'], resolve),
  //       name: 'JobLog',
  //       meta: { title: '调度日志' }
  //     }
  //   ]
  // },
  // {
  //   path: '/gen',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'edit/:tableId(\\d+)',
  //       component: (resolve) => require(['@/views/tool/gen/editTable'], resolve),
  //       name: 'GenEdit',
  //       meta: { title: '修改生成配置' }
  //     }
  //   ]
  // }


  // {
  //   path: "management",
  //   component: Layout,
  //   redirect: "",
  //   meta: { title: "托运平台管理", icon: "", noCache: true, affix: true},
  //   children: [

  //   ]
  // }
]

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})
