///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define(['dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/text!./Options.html',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'esri/request',
  '../utils',
  'dijit/form/TextBox',
  'jimu/dijit/CheckBox'
],
function(declare, lang, template, _WidgetBase, _TemplatedMixin,
  _WidgetsInTemplateMixin, esriRequest, gputils) {
  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
    baseClass: 'jimu-widget-setting-gp-options',
    templateString: template,

    postCreate: function(){
      this.inherited(arguments);
      this.shareResults.labelNode = this.shareResultsLabel;
      this.useResultMapServer.labelNode = this.useResultMapServerLabel;
    },

    setConfig: function(config){
      this.config = config;
      this.helpUrl.setValue(config.helpUrl);
      if(!gputils.allowShareResult(config)){
        this.shareResults.setStatus(false);
      }else{
        this.shareResults.setValue(config.shareResults);
      }

      if(typeof config.useResultMapServer === 'undefined'){
        this.useResultMapServer.setValue(false);
      }else{
        this.useResultMapServer.setValue(config.useResultMapServer);
      }

      if(config.hasResultMapServer){
        this.useResultMapServer.setStatus(true);
      }else if(config.hasResultMapServer === false){
        this.useResultMapServer.setStatus(false);
      }else{
        this.useResultMapServer.setStatus(false);
        this._setResultMapServerCheckBoxEnable();
      }
    },

    acceptValue: function(){
      this.config.helpUrl = this.helpUrl.getValue();
      if(this.useResultMapServer.status){
        this.config.useResultMapServer = this.useResultMapServer.getValue();
      }
      this.config.shareResults = this.shareResults.getValue();
    },

    _setResultMapServerCheckBoxEnable: function(){
      if(this.config.isSynchronous){
        return;
      }
      var segs = this.config.taskUrl.split('/');
      segs.pop();
      var serviceUrl = segs.join('/');
      esriRequest({
        url : serviceUrl + '?f=json',
        handleAs : "json",
        callbackParamName:'callback'
      }).then(lang.hitch(this, function(serviceMeta){
        if(serviceMeta.resultMapServerName){
          this.useResultMapServer.setStatus(true);
          this.config.hasResultMapServer = true;
          if(typeof this.config.useResultMapServer === 'undefined'){
            this.useResultMapServer.setValue(true);
          }
        }else{
          this.config.hasResultMapServer = false;
        }
      }));
    }

  });
});
