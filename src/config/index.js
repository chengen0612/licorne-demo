const domainName = {
  debug: false,
  develop: 'http://localhost:3000',
  release: '/licorne-demo',
}

const baseUrl = domainName['debug']
  ? domainName['develop']
  : domainName['release']

export default baseUrl
