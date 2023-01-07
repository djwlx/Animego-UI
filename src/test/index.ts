export const a = [
  {
    title: "version",
    key: "version",
  },
  {
    title: "setting",
    key: "setting",
    children: [
      {
        title: "feed",
        key: "setting.feed",
        children: [
          {
            title: "mikan",
            key: "setting.feed.mikan",
            children: [
              {
                title: "name",
                key: "setting.feed.mikan.name",
              },
              {
                title: "url",
                key: "setting.feed.mikan.url",
              },
            ],
          },
        ],
      },
      {
        title: "client",
        key: "setting.client",
        children: [
          {
            title: "qbittorrent",
            key: "setting.client.qbittorrent",
            children: [
              {
                title: "url",
                key: "setting.client.qbittorrent.url",
              },
              {
                title: "username",
                key: "setting.client.qbittorrent.username",
              },
              {
                title: "password",
                key: "setting.client.qbittorrent.password",
              },
            ],
          },
        ],
      },
      {
        title: "download_path",
        key: "setting.download_path",
      },
      {
        title: "save_path",
        key: "setting.save_path",
      },
      {
        title: "data_path",
        key: "setting.data_path",
      },
      {
        title: "filter",
        key: "setting.filter",
        children: [
          {
            title: "javascript",
            key: "setting.filter.javascript",
            children: [
              {
                title: "0",
                key: "setting.filter.javascript.0",
              },
            ],
          },
        ],
      },
      {
        title: "category",
        key: "setting.category",
      },
      {
        title: "tag",
        key: "setting.tag",
      },
      {
        title: "webapi",
        key: "setting.webapi",
        children: [
          {
            title: "access_key",
            key: "setting.webapi.access_key",
          },
          {
            title: "host",
            key: "setting.webapi.host",
          },
          {
            title: "port",
            key: "setting.webapi.port",
          },
        ],
      },
      {
        title: "proxy",
        key: "setting.proxy",
        children: [
          {
            title: "enable",
            key: "setting.proxy.enable",
          },
          {
            title: "url",
            key: "setting.proxy.url",
          },
        ],
      },
      {
        title: "key",
        key: "setting.key",
        children: [
          {
            title: "themoviedb",
            key: "setting.key.themoviedb",
          },
        ],
      },
    ],
  },
  {
    title: "advanced",
    key: "advanced",
    children: [
      {
        title: "update_delay_second",
        key: "advanced.update_delay_second",
      },
      {
        title: "request",
        key: "advanced.request",
        children: [
          {
            title: "timeout_second",
            key: "advanced.request.timeout_second",
          },
          {
            title: "retry_num",
            key: "advanced.request.retry_num",
          },
          {
            title: "retry_wait_second",
            key: "advanced.request.retry_wait_second",
          },
        ],
      },
      {
        title: "download",
        key: "advanced.download",
        children: [
          {
            title: "allow_duplicate_download",
            key: "advanced.download.allow_duplicate_download",
          },
          {
            title: "seeding_time_minute",
            key: "advanced.download.seeding_time_minute",
          },
          {
            title: "ignore_size_max_kb",
            key: "advanced.download.ignore_size_max_kb",
          },
          {
            title: "rename",
            key: "advanced.download.rename",
          },
        ],
      },
      {
        title: "feed",
        key: "advanced.feed",
        children: [
          {
            title: "update_delay_minute",
            key: "advanced.feed.update_delay_minute",
          },
          {
            title: "delay_second",
            key: "advanced.feed.delay_second",
          },
          {
            title: "multi_goroutine",
            key: "advanced.feed.multi_goroutine",
            children: [
              {
                title: "enable",
                key: "advanced.feed.multi_goroutine.enable",
              },
              {
                title: "goroutine_max",
                key: "advanced.feed.multi_goroutine.goroutine_max",
              },
            ],
          },
        ],
      },
      {
        title: "path",
        key: "advanced.path",
        children: [
          {
            title: "db_file",
            key: "advanced.path.db_file",
          },
          {
            title: "log_file",
            key: "advanced.path.log_file",
          },
          {
            title: "temp_path",
            key: "advanced.path.temp_path",
          },
        ],
      },
      {
        title: "default",
        key: "advanced.default",
        children: [
          {
            title: "tmdb_fail_skip",
            key: "advanced.default.tmdb_fail_skip",
          },
          {
            title: "tmdb_fail_use_title_season",
            key: "advanced.default.tmdb_fail_use_title_season",
          },
          {
            title: "tmdb_fail_use_first_season",
            key: "advanced.default.tmdb_fail_use_first_season",
          },
        ],
      },
      {
        title: "client",
        key: "advanced.client",
        children: [
          {
            title: "connect_timeout_second",
            key: "advanced.client.connect_timeout_second",
          },
          {
            title: "retry_connect_num",
            key: "advanced.client.retry_connect_num",
          },
          {
            title: "check_time_second",
            key: "advanced.client.check_time_second",
          },
        ],
      },
      {
        title: "cache",
        key: "advanced.cache",
        children: [
          {
            title: "mikan_cache_hour",
            key: "advanced.cache.mikan_cache_hour",
          },
          {
            title: "bangumi_cache_hour",
            key: "advanced.cache.bangumi_cache_hour",
          },
          {
            title: "themoviedb_cache_hour",
            key: "advanced.cache.themoviedb_cache_hour",
          },
        ],
      },
    ],
  },
];
