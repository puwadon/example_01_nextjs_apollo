import { gql, graphql } from 'react-apollo'
import App from '../components/App'
import Grid from '../components/Grid'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Nav from '../components/Nav'
import withData from '../lib/withData'

const AllArtists = ({ url: { pathname }, data: { loading, allArtists } }) => {
  return (
    <App>
      <Nav pathname={pathname} />
      {
        loading ? <Loading /> : (
          <div>
            <Header title='All Artists' pageImage='/static/microphone.svg' isIcon />
            <section>
              <Grid entries={allArtists} type='artists' />
            </section>
          </div>
        )
       }
    </App>
  )
}

const allArtists = gql`
  query allArtists {
    allArtists(orderBy: createdAt_DESC) {
      id
      title: name
      slug
      createdAt
      image: picture {
        handle
      }
    }
  }`

export default withData(graphql(allArtists)(AllArtists))
