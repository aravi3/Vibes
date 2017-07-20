import React from 'react';
import { withRouter } from 'react-router-dom';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      user_id: this.props.user.id,
      genre_id: "",
      title: "",
      artist: this.props.user.username,
      image: "",
      image_preview: ""
    };

    this.setSong = this.setSong.bind(this);
    this.setGenre = this.setGenre.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setImage = this.setImage.bind(this);
    this.uploadSong = this.uploadSong.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllGenres();
  }

  setGenre(e) {
    let genre_id = "";

    if (e.target.value !== "Select Genre") {
      genre_id = e.target.value;
    }

    genre_id = parseInt(genre_id);

    if (genre_id) {
      this.setState({ genre_id });
    }
  }

  setTitle(e) {
    const title = e.target.value ? e.target.value : "";
    this.setState({ title });
  }

  setSong(e) {
    const file = e.target.files[0];
    this.setState({ url: file });
  }

  setImage(e) {
    const file = e.target.files[0];
    var fileReader = new FileReader();

    fileReader.onload = () => {
      this.setState({ image: file, image_preview: fileReader.result });
      console.log(file);
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  uploadSong(e) {
    e.preventDefault();
    
    const url = this.state.url;
    const userId = this.state.user_id;
    const genreId = this.state.genre_id;
    const title = this.state.title;
    const artist = this.state.artist;
    const image = this.state.image;

    const song = {
      url: url,
      user_id: userId,
      genre_id: genreId,
      title: title,
      artist: artist,
      image: image
    };
  }

  render() {

    let errors = this.props.errors.map((err, idx) => {
      return (<p key={`upload-errors-${idx}`}>{err}</p>);
    });

    let genres = this.props.genres.map((genre, idx) => {
      return (<option value={genre.id} key={`genre-${idx}`}>{genre.name}</option>);
    });

    return (
      <form className="upload-form-container">
        <section className="upload-form">
          <div className="upload-form-left">
            <div style={{backgroundImage: `url(${this.state.image_preview})`}} className="upload-image"></div>

            <br />

            <i className="fa fa-cloud-upload"></i>
            <input type="file" className="attach-file" onChange={this.setImage}/>

          </div>

          <div className="upload-form-right">
            <input className="song-title" onChange={this.setTitle} placeholder="title" type="text" value={this.state.title}/>

            <br /><br /><br />

              <select onChange={this.setGenre} className="genre-dropdown">
                <option selected="selected">Select Genre</option>
                {genres}
              </select>

            <br /><br /><br />

            <center>
              <i className="fa fa-music"></i>
              <input type="file" className="attach-file" onChange={this.setSong}/>
            </center>

            <br /><br />
            {errors}
          </div>
        </section>

        <br /><br />
        <center>
          <button className="splash-button" onClick={this.uploadSong}>Upload!</button>
        </center>
      </form>
    );
  }
}

export default UploadForm;
