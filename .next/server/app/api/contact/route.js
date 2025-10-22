"use strict";(()=>{var e={};e.id=386,e.ids=[386],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},9523:e=>{e.exports=require("dns")},2361:e=>{e.exports=require("events")},7147:e=>{e.exports=require("fs")},3685:e=>{e.exports=require("http")},5687:e=>{e.exports=require("https")},1808:e=>{e.exports=require("net")},2037:e=>{e.exports=require("os")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},4404:e=>{e.exports=require("tls")},7310:e=>{e.exports=require("url")},3837:e=>{e.exports=require("util")},9796:e=>{e.exports=require("zlib")},4610:(e,r,o)=>{o.r(r),o.d(r,{headerHooks:()=>d,originalPathname:()=>m,requestAsyncStorage:()=>c,routeModule:()=>p,serverHooks:()=>l,staticGenerationAsyncStorage:()=>u,staticGenerationBailout:()=>S});var s={};o.r(s),o.d(s,{POST:()=>POST});var t=o(884),n=o(6132),i=o(5798),a=o(6709);async function POST(e){try{let{name:r,email:o,subject:s,message:t}=await e.json();if(console.log("Received form data:",{name:r,email:o,subject:s,message:t}),console.log("Environment check:",{SMTP_HOST:process.env.SMTP_HOST,SMTP_PORT:process.env.SMTP_PORT,SMTP_USER:process.env.SMTP_USER?"Set":"Not set",SMTP_PASS:process.env.SMTP_PASS?"Set":"Not set",FROM_EMAIL:process.env.FROM_EMAIL,TO_EMAIL:process.env.TO_EMAIL}),!r||!o||!t)return i.Z.json({error:"Name, email, and message are required"},{status:400});if(!process.env.SMTP_HOST||!process.env.SMTP_USER||!process.env.SMTP_PASS)return console.error("Missing required environment variables"),i.Z.json({error:"Server configuration error"},{status:500});let n=a.createTransporter({host:process.env.SMTP_HOST,port:parseInt(process.env.SMTP_PORT),secure:"true"===process.env.SMTP_SECURE,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}}),p={from:`"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,to:process.env.TO_EMAIL,subject:`${process.env.EMAIL_SUBJECT} - ${s||"No Subject"}`,html:`
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${r}</p>
            <p><strong>Email:</strong> ${o}</p>
            <p><strong>Subject:</strong> ${s||"No Subject"}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
            <h3 style="color: #495057; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #333;">${t.replace(/\n/g,"<br>")}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 12px; color: #6c757d;">
            <p>This email was sent from your website contact form.</p>
            <p>Reply directly to this email to respond to ${r}.</p>
          </div>
        </div>
      `,replyTo:o};return await n.sendMail(p),i.Z.json({message:"Email sent successfully"},{status:200})}catch(r){console.error("Error sending email:",r);let e="Failed to send email";return"EAUTH"===r.code?e="Authentication failed. Please check your Gmail credentials.":"ECONNECTION"===r.code?e="Connection failed. Please check your internet connection.":r.message&&(e=r.message),i.Z.json({error:e},{status:500})}}let p=new t.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:"app/api/contact/route"},resolvedPagePath:"C:\\Users\\Manish\\Desktop\\gavi_nextjs\\src\\app\\api\\contact\\route.js",nextConfigOutput:"export",userland:s}),{requestAsyncStorage:c,staticGenerationAsyncStorage:u,serverHooks:l,headerHooks:d,staticGenerationBailout:S}=p,m="/api/contact/route"}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),o=r.X(0,[120,729,651],()=>__webpack_exec__(4610));module.exports=o})();