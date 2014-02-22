using System.Web;
using System.Web.Optimization;

namespace Smart.Betting.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            //angular
            string angularjs = "https://ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular.min.js";
            bundles.Add(new ScriptBundle("~/bundles/angular", angularjs).Include("~/Scripts/angular.js", "~/Scripts/angular-route.js"));

            bundles.Add(new StyleBundle("~/Content/angular", "").Include("~/Content/angular*"));

            //toastr
            bundles.Add(new ScriptBundle("~/bundles/toastr").Include("~/Scripts/toastr.js"));
            bundles.Add(new StyleBundle("~/Content/toastr").Include("~/Content/toastr.css"));

            //custom js
            bundles.Add(new ScriptBundle("~/bundles/custom").Include("~/Scripts/custom/app/smart.betting*", "~/Scripts/custom/controllers/smart.betting*"));
        }
    }
}
