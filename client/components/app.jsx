const {
  RaisedButton
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

App = React.createClass({
  mixins: [ReactMeteorData],
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function(){
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  },
  getInitialState: function(){
    return {
      count : 0
    }
  },
  shouldComponentMount: function(nextProps, nextState){
  },
  getMeteorData: function(){
    return {

    }
  },
  _clickHandler: function(event){
    this.setState({
      count: this.state.count + 1
    });
  },
  render: function() {
    return (
      <div>
        <h1>Hello {this.state.count}</h1>
        <RaisedButton label="Increment" primary={true} onClick={this._clickHandler}  />
      </div>
    )
  }
});
