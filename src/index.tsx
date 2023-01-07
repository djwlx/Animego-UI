import React from "react";
import ReactDOM from "react-dom";
import App from "./layout";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
let a = {
  version: "配置文件版本",
  setting: {
    _comment: "常规设置",
    feed: {
      _comment: "自动订阅设置",
      mikan: {
        _comment: "Mikan Project(mikanani.me)订阅信息",
        name: "",
        url: "Mikan订阅链接，为空则不使用自动订阅",
      },
    },
    client: {
      _comment: "下载客户端设置",
      qbittorrent: {
        _comment: "qBittorrent客户端信息",
        url: "",
        username: "",
        password: "",
      },
    },
    download_path: "下载到的根目录",
    save_path: "下载完成后移动到的根目录",
    data_path: "数据存储根目录，用于保存数据库、插件等数据",
    filter: {
      _comment: "过滤器设置，用来筛选符合条件的项目进行解析下载",
      javascript:
        "js插件的文件名列表，依次执行。路径相对于data_path\n插件名可以忽略'.js'后缀；插件名也可以使用上层文件夹名，会自动加载文件夹内部的 'main.js' 或 'plugin.js'\n如设置为 'plugin/test'，会依次尝试加载 'plugin/test/main.js', 'plugin/test/plugin.js', 'plugin/test.js'\n",
    },
    category: "分类名，仅qBittorrent有效",
    tag: "标签表达式，仅qBittorrent有效\n可用通配符列表：\n  {year} int 番剧更新年\n  {quarter} int 番剧季度月号，取值为[4, 7, 10, 1]分别对应[春, 夏, 秋, 冬]季番剧\n  {quarter_index} int 番剧季度序号，取值为[1, 2, 3, 4]分别对应春(4月)、夏(7月)、秋(10月)、冬(1月)季番剧\n  {quarter_name} string 番剧季度名，取值为[春, 夏, 秋, 冬]\n  {ep} int 番剧当前剧集序号，从1开始\n  {week} int 番剧更新星期数，取值为[1, 2, 3, 4, 5, 6, 7]\n  {week_name} string 番剧更新星期名，取值为[星期一, 星期二, 星期三, 星期四, 星期五, 星期六, 星期日]",
    webapi: {
      _comment: "WebApi设置",
      access_key: "请求秘钥，为空则不需要验证",
      host: "",
      port: "",
    },
    proxy: {
      _comment: "代理设置",
      enable: "开启后AnimeGo所有的网络请求都会使用代理",
      url: "支持http、https和socks5代理",
    },
    key: {
      _comment: "秘钥设置",
      themoviedb:
        "theMovieDB APIkey\n可以自行申请链接（需注册）：https://www.themoviedb.org/settings/api?language=zh-CN\n以下为wetor的个人APIkey，仅用于AnimeGo使用",
    },
  },
  advanced: {
    _comment: "高级设置",
    update_delay_second:
      "更新状态等待时间\n每隔这一段时间，都会更新一次下载进度、清空下载队列(添加到下载项)\n等待过程是异步的，等待期间不影响操作\n在下载项较多、等待时间过少时会出现请求超时，所以有个最小等待时间为2秒的限制\n默认为10，最小值为2",
    request: {
      _comment: "网络请求设置",
      timeout_second: "请求超时时间",
      retry_num: "额外重试次数",
      retry_wait_second: "重试间隔等待时间",
    },
    download: {
      _comment: "下载设置",
      allow_duplicate_download: "允许重复下载同剧集不同资源",
      seeding_time_minute: "做种时间",
      ignore_size_max_kb: "忽略小文件大小",
      rename:
        "重命名方式\n下载状态顺序为: 创建下载项->下载->下载完成->做种->做种完成\n可选值为: ['link', 'link_delete', 'move', 'wait_move']\n  link: 使用硬链接方式，下载完成后触发。不影响做种\n  link_delete: 使用硬链接方式，下载完成后触发。不影响做种，做种完成后删除原文件\n  move: 使用移动方式，下载完成后触发。无法做种\n  wait_move: 使用移动方式，做种完成后触发",
    },
    feed: {
      _comment: "订阅设置",
      update_delay_minute: "订阅刷新时间",
      delay_second: "订阅解析间隔时间，防止高频请求",
      multi_goroutine: {
        _comment: "订阅多协程解析",
        enable: "多协程解析是否启用",
        goroutine_max: "多协程解析最大协程数量",
      },
    },
    path: {
      _comment: "其他路径设置，路径相对于data_path",
      db_file: "数据库保存文件名",
      log_file: "日志保存文件名，日志会在所在文件夹自动归档",
      temp_path: "临时文件保存文件夹",
    },
    default: {
      _comment:
        "默认值开关设置，同类型默认值按优先级执行。数值越大，优先级越高",
      tmdb_fail_skip: "tmdb解析失败时，跳过此条目。优先级3",
      tmdb_fail_use_title_season:
        "tmdb解析失败时，从文件名中获取季度信息。优先级2",
      tmdb_fail_use_first_season: "tmdb解析失败时，默认使用第一季。优先级1",
    },
    client: {
      _comment: "下载客户端设置",
      connect_timeout_second: "连接超时时间",
      retry_connect_num: "连接失败重试次数",
      check_time_second: "检查连接状态间隔时间，每次检查都会进行重试连接",
    },
    cache: {
      _comment: "缓存设置",
      mikan_cache_hour:
        "Mikan数据缓存时间，默认7*24小时(7天)。主要为mikan-id与bangumi-id的映射关系",
      bangumi_cache_hour:
        "Bangumi数据缓存时间，默认3*24小时(3天)。主要为bangumi-id与详细信息的映射",
      themoviedb_cache_hour:
        "Themoviedb数据缓存时间，默认14*24小时(14天)。主要为tmdb-id与季度信息的映射",
    },
  },
};
