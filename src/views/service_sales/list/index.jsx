import React from 'react'
const List = () => (
  <div className="service-content">
    <div className="blank20" />
    <ul className="tab-name font16">
      <li><a>全部</a></li>
      <li className="active"><a>正在处理</a></li>
      <li><a>未处理</a></li>
      <li><a>完成</a></li>
    </ul>
    <div className="blank20" />
    <ul className="process-list">
      <li className="bg-white color-black font14 clearfix">
        <p className="font16 job-number font16">
          工单号：0001
          <a className="modify font14 color-white">正在处理</a>
          <a className="fr button button-link"><i className="anticon-add" />修改</a>
          <a className="fr button button-link"><i className="anticon-add" />撤单</a>
          <a className="fr button button-link"><i className="anticon-add" />换人</a>
        </p>
        <div className="fl label-info dhms-sm-5 dhms-xs-24">
          <p><span className="color-super-gray">客户：</span>许厂矿</p>
          <p><span className="color-super-gray">产品：</span>可制动装置</p>
        </div>
        <div className="fl label-info dhms-sm-5 dhms-xs-24">
          <p><span className="color-super-gray">联系人：</span>张三</p>
          <p><span className="color-super-gray">电    话：</span>15995775963</p>
        </div>
        <div className="fl label-info dhms-sm-5 dhms-xs-24">
          <p><span className="color-super-gray">提交时间：</span>2017-05-26</p>
          <p><span className="color-super-gray">处理时间：</span>2017-05-28</p>
        </div>
        <div className="fl label-info dhms-sm-5 dhms-xs-24">
          <p><span className="color-super-gray">文件描述：</span><br />不能正常运行</p>
        </div>
      </li>
      <li className="bg-white color-black font14 clearfix">
        <p className="font16 job-number font16">
          工单号：0001
          <a className="modify font14 color-white">正在处理</a>
          <a className="fr button button-link"><i className="anticon-add" />修改</a>
          <a className="fr button button-link"><i className="anticon-add" />撤单</a>
          <a className="fr button button-link"><i className="anticon-add" />换人</a>
        </p>
        <div className="fl label-info dhms-sm-5 dhms-xs-24">
          <p><span className="color-super-gray">客户：</span>许厂矿</p>
          <p><span className="color-super-gray">产品：</span>可制动装置</p>
        </div>
        <div className="fl label-info dhms-sm-5 dhms-xs-24">
          <p><span className="color-super-gray">联系人：</span>张三</p>
          <p><span className="color-super-gray">电    话：</span>15995775963</p>
        </div>
        <div className="fl label-info dhms-sm-5 dhms-xs-24">
          <p><span className="color-super-gray">提交时间：</span>2017-05-26</p>
          <p><span className="color-super-gray">处理时间：</span>2017-05-28</p>
        </div>
        <div className="fl label-info dhms-sm-5 dhms-xs-24">
          <p><span className="color-super-gray">文件描述：</span><br />不能正常运行</p>
        </div>
      </li>
      <li className="bg-white color-black font14 clearfix">
        <p className="font16 job-number font16">
          工单号：0001
          <a className="modify font14 color-white">正在处理</a>
          <a className="fr button button-link"><i className="anticon-add" />修改</a>
          <a className="fr button button-link"><i className="anticon-add" />撤单</a>
          <a className="fr button button-link"><i className="anticon-add" />换人</a>
        </p>
        <div className="fl label-info dhms-sm-5 dhms-xs-24">
          <p><span className="color-super-gray">客户：</span>许厂矿</p>
          <p><span className="color-super-gray">产品：</span>可制动装置</p>
        </div>
        <div className="fl label-info dhms-sm-5 dhms-xs-24">
          <p><span className="color-super-gray">联系人：</span>张三</p>
          <p><span className="color-super-gray">电话：</span>15995775963</p>
        </div>
        <div className="fl label-info dhms-sm-5 dhms-xs-24">
          <p><span className="color-super-gray">提交时间：</span>2017-05-26</p>
          <p><span className="color-super-gray">处理时间：</span>2017-05-28</p>
        </div>
        <div className="fl label-info dhms-sm-5 dhms-xs-24">
          <p><span className="color-super-gray">文件描述：</span><br />不能正常运行</p>
        </div>
      </li>
    </ul>
    <div className="clearfix">
      <div className="pagination clearfix display-way">
        <a className="previous_link disabled">上一页</a>
        <a className="page-link active">1</a>
        <a className="page-link">2</a>
        <a className="next-link">下一页</a>
      </div>
    </div>
  </div>
)
export default List
