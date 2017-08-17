import React from 'react';
import { withRouter } from 'react-router-dom';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      track: null,
      user_id: this.props.user.id,
      genre_id: "",
      title: "",
      artist: this.props.user.username,
      image: null,
      image_preview: "",
      loading: false
    };

    this.setSong = this.setSong.bind(this);
    this.setGenre = this.setGenre.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setImage = this.setImage.bind(this);
    this.uploadSong = this.uploadSong.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentSong !== this.props.currentSong) {
      this.props.closeModal();
      let path = `/api/songs/${nextProps.currentSong}`;
      this.props.history.push(path);
    }
    else if (this.props.errors) {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.props.fetchAllGenres();

    if (this.props.songId) {
      this.props.fetchSong(this.props.songId).then(
        () => {
          this.setState({ track: this.props.songs[0].track });
          this.setState({ genre_id: this.props.songs[0].genre_id });
          this.setState({ title: this.props.songs[0].title });
          this.setState({ image_preview: this.props.songs[0].image });
        }
      );
    }
  }

  setGenre(e) {
    let genre_id = "";

    if (e.target.value !== "invalid") {
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
    const file = e.currentTarget.files[0];
    this.setState({ track: file });
  }

  setImage(e) {
    const file = e.currentTarget.files[0];
    var fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ image: file, image_preview: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  uploadSong(e) {
    e.preventDefault();

    var formData = new FormData();
    formData.append("song[track]", this.state.track);
    formData.append("song[user_id]", this.state.user_id);
    formData.append("song[genre_id]", this.state.genre_id);
    formData.append("song[title]", this.state.title);
    formData.append("song[artist]", this.state.artist);
    formData.append("song[image]", this.state.image);

    if (this.props.songId) {
      this.props.editSong(formData, this.props.songId).then(
        () => this.props.closeModal()
      );
    }
    else {
      this.props.createSong(formData).then(
        () => this.props.closeModal()
      );
    }

    this.setState({ loading: true });
  }

  render() {

    let errors = this.props.errors.map((err, idx) => {
      return (<p className="error-messages" key={`upload-errors-${idx}`}>{err}</p>);
    });

    let genres = this.props.genres.map((genre, idx) => {
      if (this.state.genre_id === genre.id) {
        return (<option selected value={genre.id} key={`genre-${idx}`}>{genre.name}</option>);
      }
      else {
        return (<option value={genre.id} key={`genre-${idx}`}>{genre.name}</option>);
      }
    });

    return (
      <form className="upload-form-container">
        <section className="upload-form">
          <div className="upload-form-left">
            <div style={{backgroundImage: `url(${this.state.image_preview})`}} className="upload-image">
              {this.state.loading ? <div className="loader-upload"></div> : ""}
            </div>

            <br />

            <i className="fa fa-picture-o"></i>
            <input disabled={this.state.loading} type="file" className="attach-file" onChange={this.setImage}/>

          </div>

          <div className="upload-form-right">
            <input disabled={this.state.loading} className="song-title" onChange={this.setTitle} placeholder="title" type="text" value={this.state.title}/>

            <br /><br /><br />

            <select disabled={this.state.loading} onChange={this.setGenre} className="upload-genre-dropdown">
              <option value="invalid">Select Genre</option>
              {genres}
            </select>

            <br /><br /><br />

            <center>
              <i className="fa fa-music"></i>
              <input disabled={this.state.loading} type="file" className="attach-file" onChange={this.setSong}/>
            </center>

            <br /><br />
          </div>
        </section>

        <center>
          {errors}
        </center>

        <br /><br />
        <center>
          <button disabled={this.state.loading} className="splash-button" onClick={this.uploadSong}>Upload</button>
        </center>
      </form>
    );
  }
}

export default withRouter(UploadForm);
