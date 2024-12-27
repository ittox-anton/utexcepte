import { connect } from 'react-redux';
import { setView } from './actions'; // Assuming you have an action creator named setView

class YourComponent extends React.Component {
  handleSubcategoryClick(subcategory) {
    this.props.setView({
      navbarMode: "subcategory",
      category: this.props.category,
      subcategory: subcategory,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.category}</h1>
        <button onClick={() => this.handleSubcategoryClick('exampleSubcategory')}>
          Set Subcategory View
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setView,
};

export default connect(null, mapDispatchToProps)(YourComponent);
