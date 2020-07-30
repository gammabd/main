var captchaShort
var captchaContact
var captchaSignup
var captchaForgotpassword
var captchaShortlink
var invisibleCaptchaShort
var invisibleCaptchaContact
var invisibleCaptchaSignup
var invisibleCaptchaForgotpassword
var invisibleCaptchaShortlink
window.onload=function()
{if(app_vars['enable_captcha']!=='yes'){return true}
if(app_vars['captcha_type']==='solvemedia'){if(app_vars['user_id']===''&&app_vars['captcha_short_anonymous']==='1'&&$('#captchaShort').length){captchaShort=ACPuzzle.create(app_vars['solvemedia_challenge_key'],'captchaShort',{multi:true,id:'captchaShort'})}
if(app_vars['captcha_contact']==='yes'&&$('#captchaContact').length){captchaContact=ACPuzzle.create(app_vars['solvemedia_challenge_key'],'captchaContact',{multi:true,id:'captchaContact'})}
if(app_vars['captcha_signup']==='yes'&&$('#captchaSignup').length){captchaSignup=ACPuzzle.create(app_vars['solvemedia_challenge_key'],'captchaSignup',{multi:true,id:'captchaSignup'})}
if(app_vars['captcha_forgot_password']==='yes'&&$('#captchaForgotpassword').length){captchaForgotpassword=ACPuzzle.create(app_vars['solvemedia_challenge_key'],'captchaForgotpassword',{multi:true,id:'captchaForgotpassword'})}
if(app_vars['captcha_shortlink']==='yes'&&$('#captchaShortlink').length){captchaShortlink=ACPuzzle.create(app_vars['solvemedia_challenge_key'],'captchaShortlink',{multi:true,id:'captchaShortlink'})}}}
var onloadRecaptchaCallback=function()
{if(app_vars['enable_captcha']!=='yes'){return true}
if(app_vars['captcha_type']==='recaptcha'){if(app_vars['user_id']===''&&app_vars['captcha_short_anonymous']==='1'&&$('#captchaShort').length){$('#shorten .btn-captcha').attr('disabled','disabled')
captchaShort=grecaptcha.render('captchaShort',{'sitekey':app_vars['reCAPTCHA_site_key'],'callback':function(response)
{$('#shorten .btn-captcha').removeAttr('disabled')}})}
if(app_vars['captcha_contact']==='yes'&&$('#captchaContact').length){$('#contact-form .btn-captcha').attr('disabled','disabled')
captchaContact=grecaptcha.render('captchaContact',{'sitekey':app_vars['reCAPTCHA_site_key'],'callback':function(response)
{$('#contact-form .btn-captcha').removeAttr('disabled')}})}
if(app_vars['captcha_signup']==='yes'&&$('#captchaSignup').length){$('#signup-form .btn-captcha').attr('disabled','disabled')
captchaSignup=grecaptcha.render('captchaSignup',{'sitekey':app_vars['reCAPTCHA_site_key'],'callback':function(response)
{$('#signup-form .btn-captcha').removeAttr('disabled')}})}
if(app_vars['captcha_forgot_password']==='yes'&&$('#captchaForgotpassword').length){$('#forgotpassword-form .btn-captcha').attr('disabled','disabled')
captchaForgotpassword=grecaptcha.render('captchaForgotpassword',{'sitekey':app_vars['reCAPTCHA_site_key'],'callback':function(response)
{$('#forgotpassword-form .btn-captcha').removeAttr('disabled')}})}
if(app_vars['captcha_shortlink']==='yes'&&$('#captchaShortlink').length){$('#link-view .btn-captcha').attr('disabled','disabled')
captchaShortlink=grecaptcha.render('captchaShortlink',{'sitekey':app_vars['reCAPTCHA_site_key'],'callback':function(response)
{$('#link-view .btn-captcha').removeAttr('disabled')}})}}
if(app_vars['captcha_type']==='invisible-recaptcha'){if(app_vars['user_id']===''&&app_vars['captcha_short_anonymous']==='1'&&$('#invisibleCaptchaShort').length){invisibleCaptchaShort=grecaptcha.render('invisibleCaptchaShort',{'sitekey':app_vars['invisible_reCAPTCHA_site_key'],'callback':function(response)
{$('#shorten').submit()}})}
if(app_vars['captcha_contact']==='yes'&&$('#invisibleCaptchaContact').length){invisibleCaptchaContact=grecaptcha.render('invisibleCaptchaContact',{'sitekey':app_vars['invisible_reCAPTCHA_site_key'],'callback':function(response)
{$('#contact-form').submit()}})}
if(app_vars['captcha_signup']==='yes'&&$('#invisibleCaptchaSignup').length){invisibleCaptchaSignup=grecaptcha.render('invisibleCaptchaSignup',{'sitekey':app_vars['invisible_reCAPTCHA_site_key'],'callback':function(response)
{$('#signup-form').submit()}})}
if(app_vars['captcha_forgot_password']==='yes'&&$('#invisibleCaptchaForgotpassword').length){invisibleCaptchaForgotpassword=grecaptcha.render('invisibleCaptchaForgotpassword',{'sitekey':app_vars['invisible_reCAPTCHA_site_key'],'callback':function(response)
{$('#forgotpassword-form').submit()}})}
if(app_vars['captcha_shortlink']==='yes'&&$('#invisibleCaptchaShortlink').length){invisibleCaptchaShortlink=grecaptcha.render('invisibleCaptchaShortlink',{'sitekey':app_vars['invisible_reCAPTCHA_site_key'],'callback':function(response)
{$('#link-view').submit()}})}}}
function getCookie(cname)
{var name=cname+'='
var decodedCookie=decodeURIComponent(document.cookie)
var ca=decodedCookie.split(';')
for(var i=0;i<ca.length;i++){var c=ca[i]
while(c.charAt(0)==' '){c=c.substring(1)}
if(c.indexOf(name)==0){return c.substring(name.length,c.length)}}
return ''}
var go_popup=$('#go-popup')
if(go_popup.length){$(document).one('click.adLinkFly.goPopupClick',function(e)
{go_popup.submit()})
go_popup.one('submit.adLinkFly.goPopupSubmit',function(e)
{var window_height=screen.height-150
var window_width=screen.width-150
var window_left=Number((screen.width/2)-(window_width/2))
var window_top=Number((screen.height/2)-(window_height/2))
var w=window.open('about:blank','Popup_Window','toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,'+
'width='+window_width+',height='+window_height+',left = '+window_left+',top = '+window_top+'')
this.target='Popup_Window'})}
document.cookie='ab=0;'
function checkAdblockUser()
{if(getCookie('ab')==='1'){return;}
document.cookie='ab=2; path=/';var adBlock=$('#ad-banner');if(adBlock.filter(':visible').length===0||adBlock.filter(':hidden').length>0||adBlock.height()===0){document.cookie='ab=1; path=/';if(app_vars['force_disable_adblock']==='1'){var adblock_message='<div class="alert alert-danger" style="display: inline-block;">'+
app_vars['please_disable_adblock']+'</div>';$('#link-view').replaceWith(adblock_message);$('.banner-page a.get-link').replaceWith(adblock_message);$('.interstitial-page div.skip-ad').replaceWith(adblock_message);}}}
function checkAdsbypasserUser()
{if(getCookie('ab')==='1'){return}
var ads_bypassers=['AdsBypasser','SafeBrowse']
var word=document.title.split(' ').splice(-1)[0]
document.cookie='ab=2;'
if(ads_bypassers.indexOf(word)>=0){document.cookie='ab=1;'}}
function checkPrivateMode()
{if(typeof Promise==='function'){new Promise(function(resolve)
{var db,on=function(){resolve(true)},off=function(){resolve(false)},tryls=function tryls()
{try{localStorage.length?off():(localStorage.x=1,localStorage.removeItem('x'),off())}catch(e){navigator.cookieEnabled?on():off()}}
window.webkitRequestFileSystem?webkitRequestFileSystem(0,0,off,on):'MozAppearance'in document.documentElement.style?(db=indexedDB.open('test'),db.onerror=on,db.onsuccess=off):/constructor/i.test(window.HTMLElement)?tryls():!window.indexedDB&&(window.PointerEvent||window.MSPointerEvent)?on():off()}).then(function(isPrivateMode)
{if(getCookie('ab')==='1'){return}
document.cookie='ab=2;'
if(isPrivateMode){document.cookie='ab=1;'}})}}
var body=$('body')
var ad_type='';if(body.hasClass('banner-page')){ad_type='banner';}else if(body.hasClass('interstitial-page')){ad_type='interstitial';}
var counter_start_object=document;if(app_vars['counter_start']==='load'){counter_start_object=window;}
$(counter_start_object).on(app_vars['counter_start']+'.adLinkFly.checkAdblockers',function(e){checkAdsbypasserUser();window.setTimeout(function(){checkAdblockUser();},1000);});$(counter_start_object).on(app_vars['counter_start']+'.adLinkFly.counter',function(e){if(ad_type==='banner'){var timer=$('#timer');window.setTimeout(function(){var time=app_vars['counter_value']*1000,delta=1000,tid;tid=setInterval(function(){if(window.blurred){return;}
time-=delta;timer.text(time/1000);if(time<=0){clearInterval(tid);$('#go-link').addClass('go-link');$('#go-link.go-link').submit();}},delta);},500);window.onblur=function(){window.blurred=true;};window.onfocus=function(){window.blurred=false;};}
if(ad_type==='interstitial'){var skip_ad=$('.skip-ad');var counter=$('.skip-ad .counter');window.setTimeout(function(){var time=app_vars['counter_value']*1000,delta=1000,tid;tid=setInterval(function(){time-=delta;counter.text((time/1000)+' s');if(time<=0){skip_ad.html('<a href="" class="btn" onclick="javascript: return false;">'+
app_vars['skip_ad']+'</a>');clearInterval(tid);$('#go-link').addClass('go-link');$('#go-link.go-link').submit();}},delta);},500);}});checkPrivateMode();$('#go-link').one('submit.adLinkFly.counterSubmit',function(e)
{e.preventDefault()
var goForm=$(this)
if(!goForm.hasClass('go-link')){return}
var submitButton=goForm.find('button')
$.ajax({dataType:'json',type:'POST',url:goForm.attr('action'),data:goForm.serialize(),beforeSend:function(xhr)
{if(ad_type==='banner'){submitButton.attr('disabled','disabled')
$('a.get-link').text(app_vars['getting_link'])}
if(ad_type==='interstitial'){submitButton.attr("disabled","disabled");}},success:function(result,status,xhr)
{if(result.url){if(ad_type==='banner'){$('a.get-link').attr('href',result.url).removeClass('disabled').html(app_vars['get_link'])}
if(ad_type==='interstitial'){$('.skip-ad a').attr('href',result.url).removeAttr('onclick');}}else{alert(result.message)}},error:function(xhr,status,error)
{console.log('An error occured: '+xhr.status+' '+xhr.statusText)},complete:function(xhr,status)
{}})})
$('body').one('focus.adLinkFly.displayShortenCaptcha','#shorten input#url',function(e)
{$('#shorten .form-group.captcha').slideDown('slow')})
$(document).ready(function()
{var url_href=window.location.href
if(url_href.substr(-1)==='#'){history.pushState('',document.title,url_href.substr(0,url_href.length-1))}
var url=window.location.href
$('.sidebar-menu a').filter(function()
{return this.href===url}).parents('.sidebar-menu li').addClass('active')
function fixHeight()
{var headerHeight=$('header.main-header').outerHeight()
$('#frame').attr('height',(($(window).height()-0)-headerHeight)+'px')}
$(window).resize(function()
{fixHeight()}).resize()
function populate_visitors_price()
{var visitors=0
$('input[id^=campaign-items-][id$=-purchase]').each(function(index,item)
{var val=$(item).val()
visitors+=val*1000})
$('#total-visitors').text(visitors)
var price=0
$('input[id^=campaign-items-][id$=-purchase]').each(function(index,item)
{var val=$(item).data("advertiser_price")
price+=val*$(item).val()})
$('#total-price').text(price.toFixed(2).toLocaleString(app_vars['language']))}
populate_visitors_price()
$('#campaign-create').change(function()
{populate_visitors_price()})
function shortenButton()
{var short_box=$('.box-short')
var short_button=$('button.shorten-button')
if(jQuery(window).width()<=767){short_box.css('display','block')
short_button.css('display','none')}else{short_box.css('display','none')
short_button.css('display','block')}}
$(window).resize(function()
{shortenButton()}).resize()
$('button.shorten-button').click(function(e)
{e.preventDefault()
$('.box-short').toggle('fast')})})
$('button.advanced').click(function()
{$('.advanced-div').toggle('fast')})
$('#form-settings a[data-toggle="tab"]').on('shown.bs.tab',function(e)
{var id=$(e.target).attr('href').substr(1)
localStorage.setItem('settings_selectedTab',id)})
var selectedTab=localStorage.getItem('settings_selectedTab')
if($('#form-settings').length&&selectedTab!==null){$('#form-settings a[data-toggle="tab"][href="#'+selectedTab+'"]').tab('show')}else{$('#form-settings a[data-toggle="tab"]:first').tab('show')}
$('.shorten-member #shorten').on('submit.adLinkFly.memberShortLinkForm',function(e)
{e.preventDefault()
var shortenForm=$(this)
var shortenContainer=shortenForm.closest('.box-short')
var submitButton=shortenForm.find('button.btn-submit')
var submitButtoHTML=submitButton.html()
$.ajax({dataType:'json',type:'POST',url:shortenForm.attr('action'),data:shortenForm.serialize(),beforeSend:function(xhr)
{submitButton.attr('disabled','disabled').html('<i class="fa fa-spinner fa-spin"></i>')
$('<div class="overlay"><i class="fa fa-refresh fa-spin"></i></div>').insertAfter(shortenContainer.find('.box-body'))},success:function(result,status,xhr)
{if(result.url){var short_url_html='<div class="form-group"><div class="input-group"><input class="form-control input-lg" '+
'value="'+result.url+'" readonly onfocus="javascript:this.select()" ><div class="input-group-addon copy-it" '+
'data-clipboard-text="'+result.url+'" data-toggle="tooltip" data-placement="left" title="'+
app_vars['copy']+'"><i class="fa fa-clone"></i></div></div></div>'
$('.shorten.add-link-result').html(short_url_html).slideDown()
$('[data-toggle="tooltip"]').tooltip()}else{var success_message='<div class="form-group"><p></p><div class="alert alert-danger" role="alert">'+
result.message+'</div></div>'
$('.shorten.add-link-result').html(success_message).slideDown()}},error:function(xhr,status,error)
{alert('An error occured: '+xhr.status+' '+xhr.statusText)},complete:function(xhr,status)
{shortenContainer.find('.overlay').remove()
submitButton.removeAttr('disabled').html(submitButtoHTML)}})})
$('.shorten #shorten').on('submit.adLinkFly.homeShortLinkForm',function(e)
{e.preventDefault()
if(app_vars['user_id']==''&&app_vars['home_shortening_register']==='yes'){window.location.href=app_vars['base_url']+'auth/signup'
return}
var shortenForm=$(this)
var submitButton=shortenForm.find('button')
var submitButtoHTML=submitButton.html()
var lodingButton=$('#loading')
var linkShort=$('#url')
var resultShort=$('.add-link-result');$.ajax({dataType:'json',type:'POST',url:shortenForm.attr('action'),data:shortenForm.serialize(),beforeSend:function(xhr)
{submitButton.hide()
lodingButton.show()},success:function(result,status,xhr)
{if(result.url){setTimeout(function(){linkShort.removeClass('has-error');submitButton.show()
lodingButton.hide()
linkShort.attr('value','');resultShort.show().html('<a class="sh-result" href="'+result.url+'" target="_blank">'+result.url+'</a> <button class="copy-it" type="button" data-clipboard-text="'+result.url+'">Copy <i class="material-icons">content_copy</i></button>');},1000);}else{setTimeout(function(){linkShort.addClass('has-error');submitButton.show();lodingButton.hide();resultShort.hide();},1000);}},error:function(xhr,status,error)
{alert('An error occured: '+xhr.status+' '+xhr.statusText)},complete:function(xhr,status)
{$('[data-toggle="tooltip"]').tooltip()
submitButton.removeAttr('disabled')
$('.shorten.loader').remove()
shortenForm[0].reset()
try{grecaptcha.reset(captchaShort)}catch(e){}
try{ACPuzzle.reload('captchaShort')}catch(e){}}})});$('[data-toggle="tooltip"]').tooltip()
var clipboard=new ClipboardJS('.copy-it')
clipboard.on('success',function(e){copIed();});function copIed(){var a=$('.copy-it').attr('data-clipboard-text');var b=$('.sh-result');var c=$('<span class="copied">'+a+"</span>");b.prepend(c);c.animate({"margin-top":-15,opacity:0},function(){$(this).remove()})}
function setTooltip(btn,message)
{$(btn).attr('data-original-title',message).tooltip('show')}
function setCookie(cname,cvalue,exdays)
{var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires='expires='+d.toUTCString();document.cookie=cname+'='+cvalue+';'+expires+';path=/';}
function getCookie(cname)
{var name=cname+'=';var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)===' '){c=c.substring(1);}
if(c.indexOf(name)===0){return c.substring(name.length,c.length);}}
return '';}
function cookie_accept()
{var cookie_html='<div id="cookie-pop">'+
'<div class="container-fluid">'+
'<div class="col-xs-9">'+
'<div class="cookie-message">'+app_vars['cookie_message']+'</div>'+
'</div>'+
'<div class="col-xs-3">'+
'<div class="cookie-confirm">'+
'<button id="got-cookie" class="btn btn-default" type="submit">'+
app_vars['cookie_button']+'</button>'+
'</div>'+
'</div>'+
'</div>'+
'</div>';$('body').append(cookie_html);}
if(app_vars['cookie_notification_bar']){if(getCookie('cookieLaw')===''){cookie_accept();$('#cookie-pop').show();$('#got-cookie').click(function(){setCookie('cookieLaw','got_it',365);$('#cookie-pop').remove();});}}