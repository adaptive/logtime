import { Manager } from '@managed-components/types'

export default async function (manager: Manager) {
  manager.addEventListener('pageview', async event => {
    const { client } = event

    // Get the client's timestamp
    const clientTime = client.timestamp

    //format to Date
    const date = new Date(clientTime).toString()

    // Send the client's timestamp to the browser console
    client.execute(`console.log("${date}")`)

    // Alternatively, with a slight delay :)
    //client.execute(`console.log(new Date().toString())`)
  })
}
