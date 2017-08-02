import React from 'react'
const Index = () => (
  <div className="service-content">
    <div className="blank20" />
    <div className="clearfix index-tag">
      <div className="dhms-md-6 dhms-xs-24 index-list">
        <div className="bg-white list-info clearfix">
          <span className="all fl icon-box"><i className="anticon-all color-white" /></span>
          <div className="list-word fl font16 color-black">
            全部<br /><a className="unmber color-super-gray">666</a>
          </div>
        </div>
      </div>
      <div className="dhms-md-6 dhms-xs-24 index-list">
        <div className="bg-white list-info clearfix">
          <span className="set fl icon-box"><i className="anticon-set color-white" /></span>
          <div className="list-word fl font16 color-black">
            正在处理<br /><a className="unmber color-super-gray">666</a>
          </div>
        </div>
      </div>
      <div className="dhms-md-6 dhms-xs-24 index-list">
        <div className="bg-white list-info clearfix">
          <span className="untreated fl icon-box"><i className="anticon-untreated color-white" /></span>
          <div className="list-word fl font16 color-black">
            未处理<br /><a className="unmber color-super-gray">666</a>
          </div>
        </div>
      </div>
      <div className="dhms-md-6 dhms-xs-24 index-list">
        <div className="bg-white list-info clearfix">
          <span className="finished fl icon-box"><i className="anticon-finished color-white" /></span>
          <div className="list-word fl font16 color-black">
            完成<br /><a className="unmber color-super-gray">666</a>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="blank20" />
      <div className="dhms-xs-24">
        <div className="add-new text-center">
          <i className="anticon-list-add color-white" /><br /><span className="color-white font16">开工单</span>
        </div>
      </div>
      <div className="blank20" />
    </div>
    <div className="recent-process">
      <div className="s-h1 font20 color-black">
        <strong>最近处理</strong>
      </div>
      <div className="blank20" />
      <ul className="process-list">
        <li className="bg-white color-black font14 clearfix">
          <div className="font16 job-number font16">
            工单号：0001
            <a className="modify font14 color-white">正在处理</a>
            <a className="fr button button-link"><i className="anticon-add" />修改</a>
            <a className="fr button button-link"><i className="anticon-add" />撤单</a>
            <a className="fr button button-link"><i className="anticon-add" />换人</a>
          </div>
          <div className="fl label-info dhms-sm-5 dhms-xs-24">
            <div><span className="color-super-gray">客户：</span>许厂矿</div>
            <div><span className="color-super-gray">产品：</span>可制动装置</div>
          </div>
          <div className="fl label-info dhms-sm-5 dhms-xs-24">
            <div><span className="color-super-gray">联系人：</span>张三</div>
            <div><span className="color-super-gray">电    话：</span>15995775963</div>
          </div>
          <div className="fl label-info dhms-sm-5 dhms-xs-24">
            <div><span className="color-super-gray">提交时间：</span>2017-05-26</div>
            <div><span className="color-super-gray">处理时间：</span>2017-05-28</div>
          </div>
          <div className="fl label-info dhms-sm-5 dhms-xs-24">
            <div><span className="color-super-gray">文件描述：</span><br />不能正常运行</div>
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
          <div className="font16 job-number font16">
            工单号：0001
            <a className="modify font14 color-white">正在处理</a>
            <a className="fr button button-link"><i className="anticon-modify" />修改</a>
            <a className="fr button button-link"><i className="anticon-change" />换人</a>
            <a className="fr button button-link"><i className="anticon-cancel" />撤单</a>
            <a className="fr button button-link"><i className="anticon-history" />历史</a>
            <a className="fr button button-link"><i className="anticon-see" />查看</a>

          </div>
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
      </ul>
    </div>
  </div>
)
export default Index
