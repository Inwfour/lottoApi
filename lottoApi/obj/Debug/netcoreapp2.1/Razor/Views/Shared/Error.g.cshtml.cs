<<<<<<< HEAD
#pragma checksum "D:\Lotto-Project\lottoApi\lottoApi\Views\Shared\Error.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "583387379a597938339285f5a623245873b0a91c"
=======
#pragma checksum "F:\workthes\lottoApi\lottoApi\Views\Shared\Error.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "583387379a597938339285f5a623245873b0a91c"
>>>>>>> provider
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared_Error), @"mvc.1.0.view", @"/Views/Shared/Error.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Shared/Error.cshtml", typeof(AspNetCore.Views_Shared_Error))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
<<<<<<< HEAD
#line 1 "D:\Lotto-Project\lottoApi\lottoApi\Views\_ViewImports.cshtml"
=======
#line 1 "F:\workthes\lottoApi\lottoApi\Views\_ViewImports.cshtml"
>>>>>>> provider
using lottoApi;

#line default
#line hidden
<<<<<<< HEAD
#line 2 "D:\Lotto-Project\lottoApi\lottoApi\Views\_ViewImports.cshtml"
=======
#line 2 "F:\workthes\lottoApi\lottoApi\Views\_ViewImports.cshtml"
>>>>>>> provider
using lottoApi.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"583387379a597938339285f5a623245873b0a91c", @"/Views/Shared/Error.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"94e8e21d518a0429e4499b12a2487fa48a706dd8", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared_Error : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<ErrorViewModel>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
<<<<<<< HEAD
#line 2 "D:\Lotto-Project\lottoApi\lottoApi\Views\Shared\Error.cshtml"
=======
#line 2 "F:\workthes\lottoApi\lottoApi\Views\Shared\Error.cshtml"
>>>>>>> provider
  
    ViewData["Title"] = "Error";

#line default
#line hidden
            BeginContext(64, 120, true);
            WriteLiteral("\r\n<h1 class=\"text-danger\">Error.</h1>\r\n<h2 class=\"text-danger\">An error occurred while processing your request.</h2>\r\n\r\n");
            EndContext();
<<<<<<< HEAD
#line 9 "D:\Lotto-Project\lottoApi\lottoApi\Views\Shared\Error.cshtml"
=======
#line 9 "F:\workthes\lottoApi\lottoApi\Views\Shared\Error.cshtml"
>>>>>>> provider
 if (Model.ShowRequestId)
{

#line default
#line hidden
            BeginContext(214, 52, true);
            WriteLiteral("    <p>\r\n        <strong>Request ID:</strong> <code>");
            EndContext();
            BeginContext(267, 15, false);
<<<<<<< HEAD
#line 12 "D:\Lotto-Project\lottoApi\lottoApi\Views\Shared\Error.cshtml"
=======
#line 12 "F:\workthes\lottoApi\lottoApi\Views\Shared\Error.cshtml"
>>>>>>> provider
                                      Write(Model.RequestId);

#line default
#line hidden
            EndContext();
            BeginContext(282, 19, true);
            WriteLiteral("</code>\r\n    </p>\r\n");
            EndContext();
<<<<<<< HEAD
#line 14 "D:\Lotto-Project\lottoApi\lottoApi\Views\Shared\Error.cshtml"
=======
#line 14 "F:\workthes\lottoApi\lottoApi\Views\Shared\Error.cshtml"
>>>>>>> provider
}

#line default
#line hidden
            BeginContext(304, 562, true);
            WriteLiteral(@"
<h3>Development Mode</h3>
<p>
    Swapping to <strong>Development</strong> environment will display more detailed information about the error that occurred.
</p>
<p>
    <strong>Development environment should not be enabled in deployed applications</strong>, as it can result in sensitive information from exceptions being displayed to end users. For local debugging, development environment can be enabled by setting the <strong>ASPNETCORE_ENVIRONMENT</strong> environment variable to <strong>Development</strong>, and restarting the application.
</p>
");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<ErrorViewModel> Html { get; private set; }
    }
}
#pragma warning restore 1591
