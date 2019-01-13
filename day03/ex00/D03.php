
I believe all you need to do is open up MAMP (not the webstart) and change it to use Ports 80, 443 & 3306 instead of MAMPS ports which one of them is 8888. It should be in the Server section and under the General tab.
I'm using MAMP Pro so not 100% sure if the interface is same for MAMP.
-UPDATE for MAMP
If you open preferences you should see an option for Ports. Then click "set to default Apache and MySql ports". That should allow you to use localhost instead of localhost:8888.
Hope that helps.