# money_controller
## ハッカソンでやります
##実行前にやること
```
$ sudo yum install -y mysql mysql-server mysql-devel
$ sudo chkconfig --level 35 mysqld on
$ sudo service mysqld start
$ rpm -ivh http://ftp.riken.jp/Linux/fedora/epel/6/x86_64/epel-release-6-8.noarch.rpm
$ sudo yum -y install nodejs npm --enablerepo=epel
$cd やりたいところ
$rake db:create
```
### サーバーの起動方法
```ruby
$rails s -b 0.0.0.0
```
hoge:3000にアクセス
