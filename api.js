export default {
  url: 'http://127.0.0.1:8000',
  curl 0.0.0.0:2213/nodes -d '{"filters": [ { "key": "last_scan_status", "value": "failed" } ] }'
  curl 0.0.0.0:2133/nodes -d '{"filters": [ { "key": "name", "value": "my test node" } ] }' 
  path: {
    prefix: 'api',
    storage: 'storage',
    upload: 'files/file-upload'
  }
}
