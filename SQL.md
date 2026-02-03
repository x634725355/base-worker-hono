<!-- 查询表数据 -->
npx wrangler d1 execute dragonfly_db --remote --command="SELECT * FROM stat_visit"

给远程库创建表
npx wrangler d1 execute dragonfly_db --remote --file=./remoteSchema.sql

<!-- 为已存在表添加字段 -->
ALTER TABLE users ADD COLUMN absolute_role_id INTEGER DEFAULT NULL;
<!-- 查看某一个表的结构 -->
PRAGMA table_info('your_table_name');
<!-- 导出远程表数据到本地 -->
npx wrangler d1 export dragonfly_db --remote --output=remote_db.sql

查询所有表
npx wrangler d1 execute dragonfly_db --remote --command="SELECT name AS table_name FROM sqlite_master WHERE type = 'table'   AND name NOT LIKE 'sqlite_%';"

查询当KV表
npx wrangler kv key list --remote --binding=dragonfly_kv

配置表
search_engine, anti_ad, recommendation_category, recommendation_link, sys_home, sys_advert, sys_navigation_bar, sys_announcement, recwords, kingkong 

npx wrangler tail rb-workers-backend


/etc/letsencrypt/live/packagebrowser.rocke7.net/fullchain.pem
/etc/letsencrypt/live/packagebrowser.rocke7.net/privkey.pem

http://10.0.0.103:8080/
