import { Manager } from '@managed-components/types'

export default async function (manager: Manager) {
  manager.addEventListener('pageview', async event => {
    const { client } = event
    client.execute(`console.log(new Date().toString())`)
  })
}
