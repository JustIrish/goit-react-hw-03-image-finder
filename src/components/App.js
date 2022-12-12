import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchPicturesApi } from './fetchPictures';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Layout } from './Layout';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    items: [],
  };

  componentDidUpdate(_, prevState) {
    const { query: newQuery, page: newPage } = this.state;

    if (prevState.query !== newQuery || prevState.page !== newPage) {
      fetchPicturesApi(newQuery, newPage)
        .then(data => this.setState({ items: data.hits }))
        .catch(error => console.log(error));
    }
  }

  handleFormSubmit = value => {
    this.setState({ query: value, page: 1, items: [] });
  };

  loadMoreHandler = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { items } = this.state;

    return (
      <Layout>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {items.length > 0 && <ImageGallery images={items} />}
        {items.length > 0 && <Button onClick={this.loadMoreHandler} />}
      </Layout>
    );
  }
}
