# money_controller
## ハッカソンでやります
##実行前にやること
```
$ sudo yum install -y mysql mysql-server mysql-devel
$ sudo chkconfig --level 35 mysqld on
$ sudo service mysqld start
$cd やりたいところ
$rake db:create
```
### サーバーの起動方法
```ruby
$rails s -b 0.0.0.0
```
hoge:3000にアクセス
