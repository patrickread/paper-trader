(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("velocity-react/velocity-transition-group"), require("velocity-react/velocity-component"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "velocity-react/velocity-transition-group", "velocity-react/velocity-component"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom"), require("velocity-react/velocity-transition-group"), require("velocity-react/velocity-component")) : factory(root["React"], root["ReactDOM"], root[undefined], root[undefined]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_72__, __WEBPACK_EXTERNAL_MODULE_84__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SearchProvider = __webpack_require__(2);

	var _SearchProvider2 = _interopRequireDefault(_SearchProvider);

	var _Map = __webpack_require__(3);

	var _Map2 = _interopRequireDefault(_Map);

	var _SearchFilter = __webpack_require__(10);

	var _SearchFilter2 = _interopRequireDefault(_SearchFilter);

	var _SearchBar = __webpack_require__(85);

	var _SearchBar2 = _interopRequireDefault(_SearchBar);

	var _DetailView = __webpack_require__(88);

	var _DetailView2 = _interopRequireDefault(_DetailView);

	var _DetailView3 = __webpack_require__(92);

	var _DetailView4 = _interopRequireDefault(_DetailView3);

	__webpack_require__(93);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(99);
	__webpack_require__(100);

	var App = _react2.default.createClass({
	  displayName: 'App',

	  getInitialState: function getInitialState() {
	    return {
	      floated: true,
	      showDetailView: false
	    };
	  },

	  componentWillMount: function componentWillMount() {
	    var mql = window.matchMedia('(min-width: 800px)');
	    mql.addListener(this.mediaQueryChanged);
	    this.setState({ mql: mql, floated: mql.matches });
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this.state.mq.removeListener(this.mediaQueryChanged);
	  },
	  mediaQueryChanged: function mediaQueryChanged() {
	    console.log(this.state.mql.matches);
	    this.setState({ floated: this.state.mql.matches });
	  },


	  // componentDidUpdate: function () {
	  //   // localStorage['steepless:distanceUnit'] = this.state.distanceUnit;
	  //   // localStorage['steepless:heightUnit'] = this.state.heightUnit;
	  // },

	  handleMarkerClick: function handleMarkerClick(provider) {
	    this.setState({
	      showDetailView: true,
	      selectedProvider: provider
	    });
	  },

	  showSearchFilter: function showSearchFilter(evt) {
	    var _this = this;

	    setTimeout(function () {
	      _this.setState({
	        showDetailView: false
	      });
	    });
	  },

	  render: function render() {
	    var component;

	    if (this.state.floated) {
	      component = _react2.default.createElement(
	        _SearchProvider2.default,
	        null,
	        _react2.default.createElement(_Map2.default, { onMarkerClick: this.handleMarkerClick }),
	        this.state.showDetailView ? _react2.default.createElement(_DetailView2.default, { provider: this.state.selectedProvider, showSearchFilter: this.showSearchFilter }) : undefined,
	        _react2.default.createElement(_SearchFilter2.default, null)
	      );
	    } else {
	      component = _react2.default.createElement(
	        _SearchProvider2.default,
	        null,
	        _react2.default.createElement(_Map2.default, { onMarkerClick: this.handleMarkerClick }),
	        this.state.showDetailView ? _react2.default.createElement(_DetailView4.default, { provider: this.state.selectedProvider, showSearchFilter: this.showSearchFilter }) : undefined,
	        _react2.default.createElement(_SearchBar2.default, null)
	      );
	    }

	    return _react2.default.createElement(
	      'div',
	      { style: this.props.style },
	      component
	    );
	  }
	});

	exports.default = App;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RECORDS_PER_PAGE = 100;

	var SearchProvider = _react2.default.createClass({
	  displayName: 'SearchProvider',

	  doSlowSearch: null,

	  componentDidMount: function componentDidMount() {
	    var _this = this;

	    this.doSlowSearch = debounce(function (newState) {
	      _this.doSearch(newState);
	    }, 250);
	  },

	  getInitialState: function getInitialState() {
	    return {
	      query: '',
	      speciality: {},
	      selectedPlan: null,
	      slider: 10,
	      payload: [],
	      origin: {
	        lat: 39.9754341,
	        lng: -83.0031875
	      }
	    };
	  },

	  setOrigin: function setOrigin(origin) {
	    this.setState({ origin: { lat: origin.latitude, lng: origin.longitude } });
	  },

	  handleOnSearch: function handleOnSearch(value) {
	    var newState = this.state;

	    for (var _len = arguments.length, name = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      name[_key - 1] = arguments[_key];
	    }

	    var last = name.pop();

	    var tempState = newState;
	    for (var i in name) {
	      tempState = newState[name];
	    }
	    tempState[last] = value;

	    // this.setState(state)
	    this.doSlowSearch(newState);
	  },

	  // @returns <String> URI query string
	  buildSearchUrl: function buildSearchUrl() {
	    var state = this.state;
	    var components = [];

	    if (state.query) {
	      components.push({ query: state.query });
	    }

	    if (state.slider) {
	      components.push({ radius: state.slider });
	    }

	    if (state.selectedPlan) {
	      components.push({ plan: state.selectedPlan });
	    }

	    if (state.rating) {
	      components.push({ rating: state.rating });
	    }

	    if (Object.keys(state.speciality).filter(function (item) {
	      return state.speciality[item];
	    }).length !== 0) {
	      var goodValues = [];
	      for (var key in state.speciality) {
	        var value = state.speciality[key];

	        if (value) {
	          goodValues.push(key);
	        }
	      }

	      components.push({ speciality: goodValues });
	    }

	    if (state.origin) {
	      // (39.688282,%20-84.137318)
	      var origin_string = '(' + state.origin.lat + ',' + state.origin.lng + ')';
	      components.push({ origin: origin_string });
	    }

	    components.push({ records_per_page: RECORDS_PER_PAGE });

	    return components.map(function (component) {
	      var part = '';
	      for (var key in component) {
	        var value = component[key];

	        if (value.constructor === Array) {
	          value = value.join(',');
	        }

	        part = part.concat(key + '=' + value);
	      }

	      return part;
	    }).join('&');
	  },

	  doSearch: function doSearch(newState) {
	    var _this2 = this;

	    var url = this.buildSearchUrl(this.state);

	    console.info('doing query with: ' + url);

	    // setTimeout(() => {
	    //   console.info('setting payload')

	    //   this.setState({
	    //     ...newState,
	    //     payload: [
	    //       {
	    //         lat: 39.997273,
	    //         lng: -82.983256,
	    //         name: 'hello',
	    //         rating: 1,
	    //         provider: 'dentist'
	    //       },
	    //       {
	    //         lat: 39.997273,
	    //         lng: -82.683256,
	    //         name: 'hello',
	    //         rating: 2,
	    //         provider: 'pediatric'
	    //       },
	    //       {
	    //         lat: 39.997273,
	    //         lng: -82.783256,
	    //         name: 'hello',
	    //         rating: 3,
	    //         provider: 'orthodontist'
	    //       },
	    //       {
	    //         lat: 39.997273,
	    //         lng: -82.883256,
	    //         name: 'hello',
	    //         rating: 4,
	    //         provider: 'periodontist'
	    //       },
	    //       {
	    //         lat: 39.967273,
	    //         lng: -82.983256,
	    //         name: 'hello',
	    //         rating: 3.5,
	    //         provider: 'surgeon'
	    //       },
	    //       {
	    //         lat: 39.967273,
	    //         lng: -82.683256,
	    //         name: 'hello',
	    //         rating: 3.5,
	    //         provider: 'pathologist'
	    //       },
	    //       {
	    //         lat: 39.967273,
	    //         lng: -82.783256,
	    //         name: 'hello',
	    //         rating: 3.5,
	    //         provider: 'prosthodonist'
	    //       },
	    //       {
	    //         lat: 39.967273,
	    //         lng: -82.883256,
	    //         name: 'hello',
	    //         rating: 4.5,
	    //         provider: 'endodontist'
	    //       }
	    //     ]
	    //   })
	    // }, 200)

	    fetch('http://app.beam.dev:3000/api/v1/facilities/search?' + url).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      console.info('setting payload', json);

	      var payload = json.payload;
	      _this2.setState({ payload: payload });
	    }).catch(function (ex) {
	      console.log('parsing failed', ex);
	    });
	  },

	  clearSearch: function clearSearch() {
	    console.info('clearing providers');
	    this.setState({
	      payload: []
	    });
	  },

	  render: function render() {
	    var that = this;

	    // removed undefined children
	    var children = this.props.children.filter(function (child) {
	      return !!child;
	    });

	    var childrenWithProps = _react2.default.Children.map(children, function (child) {
	      var props = _extends({}, that.state, {
	        onSearch: that.handleOnSearch
	      });

	      if (child.type.displayName === 'SearchFilter' || child.type.displayName === 'SearchBar') {
	        props.clearSearch = that.clearSearch;
	      } else if (child.type.displayName === 'Map') {
	        props.setOrigin = that.setOrigin;
	      }

	      return _react2.default.cloneElement(child, props);
	    });

	    return _react2.default.createElement(
	      'div',
	      null,
	      childrenWithProps
	    );
	  }
	});

	function debounce(fn, delay) {
	  var timer = null;
	  return function () {
	    var context = this;
	    var args = arguments;
	    clearTimeout(timer);
	    timer = setTimeout(function () {
	      fn.apply(context, args);
	    }, delay);
	  };
	}

	exports.default = SearchProvider;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(4);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _CustomMarker = __webpack_require__(5);

	var _CustomMarker2 = _interopRequireDefault(_CustomMarker);

	var _Provider = __webpack_require__(6);

	var _Provider2 = _interopRequireDefault(_Provider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var image = __webpack_require__(8);
	var crossHair = __webpack_require__(9);

	var Map = _react2.default.createClass({
	  displayName: 'Map',

	  map: null,
	  markers: [],

	  shouldRenderNewProviders: function shouldRenderNewProviders(old_payload_ids, new_payload_ids) {
	    var max = Math.max(old_payload_ids.length, old_payload_ids.length);

	    var isEqual = true;

	    for (var i = 0; i < max; i++) {
	      if (new_payload_ids[i] != old_payload_ids[i]) {
	        isEqual = false;
	        break;
	      }
	    }

	    // reads: is not equal
	    return !isEqual;
	  },

	  getInitialState: function getInitialState() {
	    return {
	      coords: {
	        latitude: 39.9754341,
	        longitude: -83.0031875
	      }
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      map: {
	        center: new google.maps.LatLng({
	          lat: 39.9754341,
	          lng: -83.0031875
	        }),
	        zoom: 12,
	        disableDefaultUI: true
	      }
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    var node = _reactDom2.default.findDOMNode(this.refs.map);
	    this.map = new google.maps.Map(node, this.props.map);
	  },

	  findCurrenctLocation: function findCurrenctLocation(evt) {
	    if (navigator.geolocation) {
	      // var browserSupportFlag = true
	      navigator.geolocation.getCurrentPosition(function (position) {
	        var initialLocation = new google.maps.LatLng(this.state.coords.latitude, this.state.coords.longitude);

	        var currentLocationMarker = this.state.currentLocation;
	        if (currentLocationMarker) {
	          currentLocationMarker.setMap(null);
	          currentLocationMarker.remove();
	        }

	        // current position on map
	        var marker = new google.maps.Marker({
	          position: initialLocation,
	          map: this.map,
	          icon: image
	        });

	        this.map.panTo(initialLocation);

	        this.setState({
	          origin: position.coords,
	          currentLocationMarker: marker
	        });
	        this.props.setOrigin(position.coords);
	      }.bind(this), function () {
	        //  handleNoGeolocation(browserSupportFlag)
	      });
	    }
	  },

	  renderResults: function renderResults(newMarkers) {
	    var _this = this;

	    this.nextProps.payload.map(function (provider) {
	      var marker = new _CustomMarker2.default(_react2.default.createElement(_Provider2.default, provider), _this.map);

	      google.maps.event.addListener(marker, 'click', function (evt) {
	        _this.handleMarkerClick(marker, _this.map, evt);
	      });

	      newMarkers.push(marker);
	    });
	  },

	  handleMarkerClick: function handleMarkerClick(marker, map, evt) {
	    var map_el = document.getElementById('map-canvas');
	    var height = map_el.clientHeight;
	    var width = map_el.clientWidth;

	    var sidebar = document.getElementById('sidebar');

	    if (sidebar) {
	      var width_of_detail_view = sidebar.clientWidth;
	      var x = evt.x - (width - width_of_detail_view) / 2 - width_of_detail_view;
	      var y = evt.y - height / 2 - 50;
	      this.map.panBy(x, y);
	    }

	    // cannot zoom in since the center of the map isn't where the icon is.
	    // this.map.setZoom(17)

	    this.props.onMarkerClick(marker.provider.props);
	    // make the icons bigger!!!!
	  },

	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    var _this2 = this;

	    this.nextProps = nextProps;
	    // check to make sure we have marks that need to be rendered
	    // else we can just renturn false and not re-render this component.

	    var newPayloadIds = nextProps.payload.map(function (m) {
	      return m.id;
	    }).sort();
	    var oldPayloadIds = this.props.payload.map(function (m) {
	      return m.id;
	    }).sort();

	    // render if there are no providers let it try to render or clear out the existing providers
	    // or if we should render because shouldRenderNewProviders is true
	    if (this.map && (this.nextProps.payload.length === 0 || this.shouldRenderNewProviders(newPayloadIds, oldPayloadIds))) {
	      console.info('rendering new markers');
	      var newMarkers = [];
	      this.renderResults(newMarkers);

	      // remove markers
	      setTimeout(function () {
	        while (_this2.markers.length) {
	          var marker = _this2.markers.pop();
	          marker.setMap(null);
	          marker.remove();
	        }
	        _this2.markers = newMarkers;
	      }, 0);

	      return false;
	    } else {
	      return true;
	    }
	  },

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement('div', { ref: 'map', id: 'map-canvas' }),
	      _react2.default.createElement(
	        'div',
	        { id: 'find-me', onClick: this.findCurrenctLocation },
	        _react2.default.createElement('img', { src: crossHair, className: 'overlay' })
	      )
	    );
	  }
	});

	exports.default = Map;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(4);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import MapIcon from './MapIcon'

	function CustomMarker(provider, map) {
	  this.provider = provider;

	  // Once the LatLng and text are set, add the overlay to the map.  This will
	  // trigger a call to panes_changed which should in turn call draw.
	  this.setMap(map);
	}

	CustomMarker.prototype = new google.maps.OverlayView();

	CustomMarker.prototype.draw = function () {
	  var me = this;

	  // Check if the div has been created.
	  var div = this.div_;
	  if (!div) {
	    // Create a overlay text DIV
	    div = this.div_ = document.createElement('DIV');
	    // Create the DIV representing our CustomMarker
	    div.style.border = '';
	    div.style.position = 'absolute';
	    div.style.paddingLeft = '0px';
	    div.style.cursor = 'pointer';
	    // div.innerText = 'hello'

	    google.maps.event.addDomListener(div, 'click', function (event) {
	      google.maps.event.trigger(me, 'click', event);
	    });

	    // Then add the overlay to the DOM
	    var panes = this.getPanes();

	    // lets render the component directly into the div
	    _reactDom2.default.render(this.provider, div);

	    // lets insert the div (with the react component) into google maps
	    panes.overlayImage.appendChild(div);
	  }

	  // Position the overlay
	  var point = this.getProjection().fromLatLngToDivPixel(this.getPosition());
	  if (point) {
	    div.style.left = -20 + point.x + 'px';
	    div.style.top = -40 + point.y + 'px';
	  }
	};

	CustomMarker.prototype.remove = function () {
	  // Check if the overlay was on the map and needs to be removed.
	  if (this.div_) {
	    this.div_.parentNode.removeChild(this.div_);
	    this.div_ = null;
	  }
	};

	CustomMarker.prototype.getPosition = function () {
	  return new google.maps.LatLng({
	    lat: parseFloat(this.provider.props.address.lat),
	    lng: parseFloat(this.provider.props.address.lng)
	  });
	};

	exports.default = CustomMarker;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var classNames = __webpack_require__(7);

	var Provider = _react2.default.createClass({
	  displayName: 'Provider',

	  render: function render() {
	    var rating = this.props.rating;

	    var flagClass = classNames({
	      flag: true,
	      lg: rating % 1 !== 0
	    });

	    var colors = {
	      undefined: '#00C9F0',
	      'General Practitioner': '#00C9F0',
	      'Pediatric': '#F32DC0',
	      'Orthodontist': '#FABB1E',
	      'Periodontist': '#BB59D2',
	      'Oral Surgeon': '#68E37E',
	      'Oral Pathologist': '#607afb',
	      'Prosthodontist': '#666666',
	      'Endodontist': '#d01d80'
	    };

	    var speciality = this.props.specialities[0];

	    var colorStyle = {
	      background: colors[speciality],
	      borderColor: colors[speciality]
	    };

	    if (this.props.style) {
	      Object.assign(colorStyle, this.props.style);
	    }

	    return _react2.default.createElement(
	      'div',
	      { className: flagClass, style: colorStyle },
	      _react2.default.createElement(
	        'div',
	        { className: 'body' },
	        _react2.default.createElement(
	          'span',
	          { className: 'number' },
	          this.props.rating > 0 ? this.props.rating : 0
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'star' },
	          ' '
	        )
	      ),
	      _react2.default.createElement('div', { className: 'arrow-down' })
	    );
	  }
	});

	exports.default = Provider;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAA1pJREFUSA3FVktoU1EQnTRZhJAipaZaG+zCIJgKSesPcaGxiNRAKDR+EHUlCbjpSrrSjaviqquSLo0I/kgsdGWxKwn+2gTbgqCC0NAqSlViaOlrnnPuu/f1VWJMmxQPzLufuXfOu7+ZsVF1sPMwBwvKBilcUEnKKpcaC8qKsFXQQgcC58jIyIFAIHC+ra3tmNvtbnG5XE2YVywWFwuFwpd8Pv88l8vdj8Vib7h7iQXEOkvVwCpcyWSyd25u7q1eJTAWczCXBTaqgr2zs9MzMzPzhHlKVXJZh5UwFzaYDTu0Dn9uqb2/v983MDDwqLW1db85UuMdepllyRF9+ES0+MNQNW0j2tNOdDjAEuRTXrM/Pz8/PTg4GB0aGnrPg82ztRI28F81j42NPVtH9oKJ7jwm+vzV5C9b2bGd6Eof0REmlgBpOBw+OTU19Y27cMFIEaJ08Vbc8/v9ESioxPq7aaLRp6JZ9SdyiuhSL5+gcYSzs7OjHR0dF3l+kUVXe+Dgw+7p7u6+yZ3GTyRTGyfDX737SLS8QhTYhxZ5PJ69Pp/vdSqVwtaW1E1yhkKhW9xhkGEbN7oyWFfAXNgwYJO2nWiC0J5IJA7xGzMuCS4IzqxWwAZsMWB7eHj4IFftIHQEg8GzUAjgNv7rgqixlUrYgC2Jrq6uc1x1CEJ4EKUQV99s1FjBM5KQHILQBnelFOKdmY0aK3izEpLDhhU2KN8odOpRq5G1lBZbkkM+llqMVj9XOHOssASvb86Du6oXLLaY4zubFe9QR4gxOeAb6wWLLcmhY4Ua4pnJAUdcL1hsSQ5NEGaz2YcmB7w+HHGtgA3YkpicnHzAVc1wZURuDp4Z09vALd1OqLGbK6/HzcjBq5v2er1H2VABKwSWJiYmbnBppAUIMfD6mwXmroUpXdpG6vH/whPIVzOZzHgkEulpbGxsIRvvNkJMu9eI8r8QzioAZ3btMlE4xMswTgoBOBqN9i0sLPzkmWL3VDyEJZ0Vy5qmjXOGdkKQote7k+j0caLdu9jX8/AVzgY1FgdnjZ5moqCfKHqG6OoFYwzmMFSKkU6n89wU0V4oyny2NIkqwye6cJm2JE1Uz6IcMXTYcicCNGImQszfEmG85Xg8/orHV0yEKxFafwLEdUn1fwME0g/jaEUcwAAAAABJRU5ErkJggg=="

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAA2VJREFUSA2tlUtIlFEUx+chiZY0tcjBglIXhk1SIBWClA+CNlYQglELydRxlBlJBgkC7UlgqGjDKEarJNxY0WOjYAjSIugl0gOtRYoSxIilKDrT75h3+D7nG22kC4dzz+N//vece+cbkynGVV5e7o8RYrLECiC/IlbMRkhi5TCZ/wXR0NCwaXJyMicUCqUjXWazuQwZtdvtQ8QW1quxJkltbe322dlZN4WrKDRK4RH2pej76Ex86ex9iYmJrc3NzT+jkUUlqaysdASDwWcAX8bHx19ua2v7LkW4+FBnZ+cyrqamZtf8/PxN3EfJySbnh+SsXoYkEOyAYIrkixTs0oK0JMpfUVFRQmfd2Fnkf1B+pSNIPB6PjRG9ZQxdHR0d1yXR6/UmTU9P32KbRbFcYoPs31ut1nqfz/dLciC6QOwKozvQ0tISEJ9aEa8LghqKDCkCl8u1OxAIDFPgN6BGimwTjQQXFxdn6HoPexP59wQneLG1S9dJT0+Pta+vb9xisRzx+/3fqqqqtkgh7HPYD7RA2TO6sxS+QUf7pSMhZMyvCgsLdxYXFy+pfF0n/f39hwBNCIEkQHAV+64RgcSZfzcd9i4tLV0TewU3PjAwcFhstXQkFEwj8FEFsR0UeaHsKLof/z4VA/OJblKVLdq88i2K+qlISEiwt7a2ykszXG63O3lubm7SMPjX2aGLyVNEHionB3iOfVLZRtrpdBaRE+5W8EiJNlc3LgJfkHDr7N8xrhNawOo993GGnLfKz97BQ/msbNE6koKCgjck2ThdhgRTUlIamfExOnKKvXrhd+E7z6+9QWIruK15eXlhUvHrnrA4AF6icC7v/pTYmpl3c8LHxF5zkGzkOJITFxeXz/NdvhPG9AjfIK/ujmDV0nUiTkByUXshqxdbLp2O4tmO8mpKGM+yptgEHRxUBOT78WXYbLZOwWlXRCcSrK6uTl1YWBjj1D46kpGEF8XCH0jl5Efo5QC3sW10Ma38Skd0IoH29vav8vngZPkUfUoRhwJotfglDkEpv/p0IwLJN+xEFaqrq9s8MzNThu2BcBE9ghQhT5BMOo1DtyQlJXU1NTXJt81wrUmiEPz7WaamphzcRxq+XuQ0Jx9LTk4eJhZUef9Ny53EWszwTmItsl7+Rkj036L1GIj/ARASh4CwPR5QAAAAAElFTkSuQmCC"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Front = __webpack_require__(11);

	var _Front2 = _interopRequireDefault(_Front);

	var _Back = __webpack_require__(78);

	var _Back2 = _interopRequireDefault(_Back);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VelocityComponent = __webpack_require__(84);

	__webpack_require__(73);

	var SearchFilter = _react2.default.createClass({
	  displayName: 'SearchFilter',

	  propTypes: {
	    onSearch: _react2.default.PropTypes.func,
	    payload: _react2.default.PropTypes.array
	  },

	  getInitialState: function getInitialState() {
	    return {
	      showInsuranceCardExample: false
	    };
	  },

	  showInsuranceCardExample: function showInsuranceCardExample(evt) {
	    this.setState({
	      showInsuranceCardExample: true
	    });
	  },

	  hideInsuranceCardExample: function hideInsuranceCardExample(evt) {
	    this.setState({
	      showInsuranceCardExample: false
	    });
	  },

	  getViewToRender: function getViewToRender() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      this.state.showInsuranceCardExample ? _react2.default.createElement(_Back2.default, _extends({
	        hideInsuranceCardExample: this.hideInsuranceCardExample
	      }, this.props)) : undefined,
	      _react2.default.createElement(_Front2.default, _extends({
	        showInsuranceCardExample: this.showInsuranceCardExample
	      }, this.props))
	    );
	  },

	  render: function render() {
	    var view = this.getViewToRender();
	    return _react2.default.createElement(
	      'div',
	      null,
	      view
	    );
	  }
	});

	exports.default = SearchFilter;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _CircleButton = __webpack_require__(12);

	var _CircleButton2 = _interopRequireDefault(_CircleButton);

	var _rcSlider = __webpack_require__(14);

	var _rcSlider2 = _interopRequireDefault(_rcSlider);

	var _SearchInput = __webpack_require__(69);

	var _SearchInput2 = _interopRequireDefault(_SearchInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VelocityTransitionGroup = __webpack_require__(72);

	__webpack_require__(73);

	var Front = _react2.default.createClass({
	  displayName: 'Front',

	  propTypes: {
	    onSearch: _react2.default.PropTypes.func,
	    payload: _react2.default.PropTypes.array
	  },

	  getInitialState: function getInitialState() {
	    return {
	      showSecondPageButtons: false,
	      hideBody: this.props.query ? false : true,
	      slider: { value: this.props.slider ? this.props.slider : 10 },
	      plans: ['Plan 1', 'Plan 2'],
	      selectedPlan: this.props.selectedPlan ? this.props.selectedPlan : 'Please select your plan',
	      buttons: [{ // 0
	        name: 'dentist',
	        color: '#00C9F0',
	        action: this.handleFilterChange.bind(this, 'dentist')
	      }, { // 1
	        name: 'pediatric',
	        color: '#F32DC0',
	        action: this.handleFilterChange.bind(this, 'pediatric')
	      }, { // 2
	        name: 'orthodontist',
	        color: '#FABB1E',
	        action: this.handleFilterChange.bind(this, 'orthodontist')
	      }, { // 3
	        name: 'periodontist',
	        color: '#BB59D2',
	        action: this.handleFilterChange.bind(this, 'periodontist')
	      }, { // 4
	        name: 'surgeon',
	        color: '#68E37E',
	        action: this.handleFilterChange.bind(this, 'surgeon')
	      }, { // 5
	        image: __webpack_require__(77),
	        description: 'more',
	        color: '#F6F6F6',
	        textColor: '#9B9B9B',
	        action: function (name, evt) {
	          this.setState({
	            showSecondPageButtons: !this.state.showSecondPageButtons
	          });
	        }.bind(this, 'more')
	      }, { // 6
	        name: 'pathologist',
	        color: '#607afb',
	        action: this.handleFilterChange.bind(this, 'pathologist')
	      }, { // 7
	        name: 'prosthodonist',
	        color: '#666666',
	        action: this.handleFilterChange.bind(this, 'prosthodonist')
	      }, { // 8
	        name: 'endodontist',
	        color: '#d01d80',
	        action: this.handleFilterChange.bind(this, 'endodontist')
	      }]
	    };
	  },

	  handleFilterChange: function handleFilterChange(name, evt) {
	    this.props.onSearch(evt.target.checked, 'speciality', name);
	  },

	  handlePlanChange: function handlePlanChange(evt) {
	    var selectedPlan = evt.target.value;
	    this.setState({
	      selectedPlan: selectedPlan
	    });

	    this.props.onSearch(selectedPlan, 'selectedPlan');
	  },

	  onSliderChange: function onSliderChange(value) {
	    this.setState({
	      slider: { value: value }
	    });

	    this.props.onSearch(value, 'slider');
	  },

	  onRatingChange: function onRatingChange(value, lstRating) {
	    this.props.onSearch(value, 'rating');
	  },

	  handleSearchChange: function handleSearchChange(value, evt) {
	    var hideBody = false;
	    if (value === '') {
	      hideBody = true;
	    }

	    this.setState({
	      hideBody: hideBody
	    });

	    if (hideBody) {
	      this.props.clearSearch();
	    } else {
	      this.props.onSearch(value, 'query');
	    }
	  },

	  onClickSearch: function onClickSearch() {
	    var value = this.props.query;
	    this.props.onSearch(value, 'query');
	  },

	  showInsuranceCardExample: function showInsuranceCardExample(evt) {
	    evt.preventDefault();
	    evt.stopPropagation();

	    this.setState({
	      hideBody: false
	    });

	    this.props.showInsuranceCardExample();
	  },

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { id: 'sidebar' },
	      _react2.default.createElement(
	        'header',
	        null,
	        _react2.default.createElement(_SearchInput2.default, { onChange: this.handleSearchChange, query: this.props.query })
	      ),
	      _react2.default.createElement(
	        VelocityTransitionGroup,
	        {
	          enter: { animation: { translateY: [0, '-410px'] }, duration: 500 },
	          leave: { animation: { translateY: ['-410px', 0] }, duration: 500 } },
	        !this.state.hideBody ? _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'sidebar-section' },
	            _react2.default.createElement(
	              'div',
	              null,
	              'Network',
	              _react2.default.createElement(
	                'a',
	                { href: '', onClick: this.showInsuranceCardExample, style: { paddingLeft: '5px', fontStyle: 'italic' } },
	                'Where can I find this?'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'sidebar-select' },
	              _react2.default.createElement(
	                'select',
	                { value: this.state.selectedPlan, onChange: this.handlePlanChange },
	                _react2.default.createElement(
	                  'option',
	                  { value: '' },
	                  'Please select your plan'
	                ),
	                this.state.plans.map(function (plan, i) {
	                  return _react2.default.createElement(
	                    'option',
	                    {
	                      value: plan,
	                      key: i },
	                    plan
	                  );
	                }.bind(this))
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'sidebar-section' },
	            _react2.default.createElement(
	              'div',
	              { className: 'slider' },
	              _react2.default.createElement(
	                'span',
	                null,
	                'Within'
	              ),
	              _react2.default.createElement(_rcSlider2.default, {
	                tipFormatter: null,
	                defaultValue: this.state.slider.value,
	                max: 50,
	                min: 1,
	                onChange: this.onSliderChange }),
	              _react2.default.createElement(
	                'span',
	                { className: 'slider-value' },
	                this.state.slider.value + ' mi'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'sidebar-section last' },
	            _react2.default.createElement(
	              'div',
	              { className: 'buttons' },
	              _react2.default.createElement(
	                VelocityTransitionGroup,
	                {
	                  enter: { animation: { translateX: [0, '310px'] }, duration: 500, style: { zIndex: 1000 } },
	                  leave: { animation: { translateX: ['310px', 0] }, duration: 500 } },
	                this.state.showSecondPageButtons ? _react2.default.createElement(
	                  'div',
	                  { className: 'button-group' },
	                  Array(6, 7, 8, 5).map(function (idx, i) {
	                    var button = this.state.buttons[idx];

	                    var name = button.description === undefined ? button.name : button.description;

	                    return _react2.default.createElement(
	                      'div',
	                      { key: idx, className: 'button-container' },
	                      _react2.default.createElement(_CircleButton2.default, _extends({}, button, { checked: this.props.speciality[name] })),
	                      _react2.default.createElement(
	                        'span',
	                        { className: 'button-name' },
	                        name[0].toUpperCase() + name.substring(1)
	                      )
	                    );
	                  }.bind(this))
	                ) : undefined
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'button-group' },
	                Array(1, 2, 3, 4, 6, 5).map(function (idx, i) {
	                  var button = this.state.buttons[idx];

	                  var name = button.description === undefined ? button.name : button.description;

	                  return _react2.default.createElement(
	                    'div',
	                    { key: idx, className: 'button-container' },
	                    _react2.default.createElement(_CircleButton2.default, button),
	                    _react2.default.createElement(
	                      'span',
	                      { className: 'button-name' },
	                      name[0].toUpperCase() + name.substring(1)
	                    )
	                  );
	                }.bind(this))
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'btn-pill-container' },
	              _react2.default.createElement(
	                'div',
	                { className: 'btn pill', onClick: this.onClickSearch },
	                'Search'
	              )
	            )
	          )
	        ) : null
	      )
	    );
	  }
	});

	exports.default = Front;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var check = __webpack_require__(13);

	var CircleButton = _react2.default.createClass({
	  displayName: 'CircleButton',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      color: '#00C9F0',
	      textColor: 'white'
	    };
	  },

	  propTypes: {
	    checked: _react2.default.PropTypes.bool,
	    color: _react2.default.PropTypes.string,
	    textColor: _react2.default.PropTypes.string,
	    name: _react2.default.PropTypes.string,
	    action: _react2.default.PropTypes.func
	  },

	  getInitialState: function getInitialState() {
	    return {
	      checked: this.props.checked ? this.props.checked : false
	    };
	  },

	  handleOnClick: function handleOnClick(evt) {
	    if (this.props.description !== 'more') {
	      this.setState({
	        checked: !this.state.checked
	      });
	    }

	    var psuedoEvent = {
	      target: {
	        checked: !this.state.checked
	      }
	    };

	    this.props.action(psuedoEvent);
	  },

	  render: function render() {
	    var style = {
	      backgroundColor: this.props.color,
	      color: this.props.textColor
	    };

	    if (this.props.image) {
	      var image = _react2.default.createElement('img', { src: this.props.image, className: 'circle-shape-overlay' });
	    } else {
	      var letter = this.props.name[0].toUpperCase();
	    }

	    return _react2.default.createElement(
	      'div',
	      { className: 'circle-button circle', style: style, onClick: this.handleOnClick },
	      this.state.checked ? _react2.default.createElement('img', { src: check, className: 'circle-shape-overlay' }) : image ? image : _react2.default.createElement(
	        'span',
	        { className: 'circle-letter-overlay' },
	        letter
	      )
	    );
	  }
	});

	exports.default = CircleButton;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAQCAYAAAD9L+QYAAAAAXNSR0IArs4c6QAAAOFJREFUOBG1kFkKwkAQRAfUI3gRl3O46x389gLuXkPwy+UunkS/XSC+itMQxIRExoKik+nuV5M4F1hRFI1xNTDWOaBTLJ1xKVgAMAM/eR6FBM8ASg88DAmex9g/gwchb7xI3Pg7mIEK3uJa3mRml1jSP+6n7tGcaApdcD110DeYSYJ7mfMM6+YnLGUG0F/FU+8bZ4MtlYUyPvrFK7VhPaucrX1fv6Jr57kqC6kBCfC9MNjSfcCBKukLmnijFyRwx2Z/qgD0BRZw41kSuP0T8HMJkAL2WAoHtiCgCtjhlp0VrS9RqkxsYR33TAAAAABJRU5ErkJggg=="

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(15);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcUtil = __webpack_require__(16);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _objectAssign2 = __webpack_require__(33);

	var _objectAssign3 = _interopRequireDefault(_objectAssign2);

	var _Track = __webpack_require__(37);

	var _Track2 = _interopRequireDefault(_Track);

	var _Handle = __webpack_require__(38);

	var _Handle2 = _interopRequireDefault(_Handle);

	var _Steps = __webpack_require__(67);

	var _Steps2 = _interopRequireDefault(_Steps);

	var _Marks = __webpack_require__(68);

	var _Marks2 = _interopRequireDefault(_Marks);

	function noop() {}

	function isNotTouchEvent(e) {
	  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
	}

	function getTouchPosition(e) {
	  return e.touches[0].pageX;
	}

	function getMousePosition(e) {
	  return e.pageX;
	}

	function pauseEvent(e) {
	  e.stopPropagation();
	  e.preventDefault();
	}

	var Slider = (function (_React$Component) {
	  _inherits(Slider, _React$Component);

	  function Slider(props) {
	    _classCallCheck(this, Slider);

	    _get(Object.getPrototypeOf(Slider.prototype), 'constructor', this).call(this, props);

	    var range = props.range;
	    var min = props.min;
	    var max = props.max;

	    var initialValue = range ? [min, min] : min;
	    var defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
	    var value = props.value !== undefined ? props.value : defaultValue;

	    var upperBound = undefined;
	    var lowerBound = undefined;
	    if (props.range) {
	      lowerBound = this.trimAlignValue(value[0]);
	      upperBound = this.trimAlignValue(value[1]);
	    } else {
	      upperBound = this.trimAlignValue(value);
	    }

	    var recent = undefined;
	    if (props.range && upperBound === lowerBound) {
	      if (lowerBound === max) {
	        recent = 'lowerBound';
	      }
	      if (upperBound === min) {
	        recent = 'upperBound';
	      }
	    } else {
	      recent = 'upperBound';
	    }

	    this.state = {
	      handle: null,
	      recent: recent,
	      upperBound: upperBound,
	      // If Slider is not range, set `lowerBound` equal to `min`.
	      lowerBound: lowerBound || min
	    };
	  }

	  _createClass(Slider, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;

	      var _state = this.state;
	      var lowerBound = _state.lowerBound;
	      var upperBound = _state.upperBound;

	      if (nextProps.range) {
	        var value = nextProps.value || [lowerBound, upperBound];
	        var nextUpperBound = this.trimAlignValue(value[1], nextProps);
	        var nextLowerBound = this.trimAlignValue(value[0], nextProps);
	        if (nextLowerBound === lowerBound && nextUpperBound === upperBound) return;

	        this.setState({
	          upperBound: nextUpperBound,
	          lowerBound: nextLowerBound
	        });
	        if (this.isValueOutOfBounds(upperBound, nextProps) || this.isValueOutOfBounds(lowerBound, nextProps)) {
	          this.props.onChange([nextLowerBound, nextUpperBound]);
	        }
	      } else {
	        var value = nextProps.value !== undefined ? nextProps.value : upperBound;
	        var nextValue = this.trimAlignValue(value, nextProps);
	        if (nextValue === upperBound && lowerBound === nextProps.min) return;

	        this.setState({
	          upperBound: nextValue,
	          lowerBound: nextProps.min
	        });
	        if (this.isValueOutOfBounds(upperBound, nextProps)) {
	          this.props.onChange(nextValue);
	        }
	      }
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(state) {
	      var props = this.props;
	      var isNotControlled = !('value' in props);
	      if (isNotControlled) {
	        this.setState(state);
	      } else if (state.handle) {
	        this.setState({ handle: state.handle });
	      }

	      var data = (0, _objectAssign3['default'])({}, this.state, state);
	      var changedValue = props.range ? [data.lowerBound, data.upperBound] : data.upperBound;
	      props.onChange(changedValue);
	    }
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove(e) {
	      var position = getMousePosition(e);
	      this.onMove(e, position);
	    }
	  }, {
	    key: 'onTouchMove',
	    value: function onTouchMove(e) {
	      if (isNotTouchEvent(e)) {
	        this.end('touch');
	        return;
	      }

	      var position = getTouchPosition(e);
	      this.onMove(e, position);
	    }
	  }, {
	    key: 'onMove',
	    value: function onMove(e, position) {
	      pauseEvent(e);
	      var props = this.props;
	      var state = this.state;

	      var diffPosition = position - this.startPosition;
	      var diffValue = diffPosition / this.getSliderLength() * (props.max - props.min);

	      var value = this.trimAlignValue(this.startValue + diffValue);
	      var oldValue = state[state.handle];
	      if (value === oldValue) return;

	      if (props.allowCross && value < state.lowerBound && state.handle === 'upperBound') {
	        this.onChange({
	          handle: 'lowerBound',
	          lowerBound: value,
	          upperBound: this.state.lowerBound
	        });
	        return;
	      }
	      if (props.allowCross && value > state.upperBound && state.handle === 'lowerBound') {
	        this.onChange({
	          handle: 'upperBound',
	          upperBound: value,
	          lowerBound: this.state.upperBound
	        });
	        return;
	      }

	      this.onChange(_defineProperty({}, state.handle, value));
	    }
	  }, {
	    key: 'onTouchStart',
	    value: function onTouchStart(e) {
	      if (isNotTouchEvent(e)) return;

	      var position = getTouchPosition(e);
	      this.onStart(position);
	      this.addDocumentEvents('touch');
	      pauseEvent(e);
	    }
	  }, {
	    key: 'onMouseDown',
	    value: function onMouseDown(e) {
	      var position = getMousePosition(e);
	      this.onStart(position);
	      this.addDocumentEvents('mouse');
	      pauseEvent(e);
	    }
	  }, {
	    key: 'onStart',
	    value: function onStart(position) {
	      var props = this.props;
	      props.onBeforeChange(this.getValue());

	      var value = this.calcValueByPos(position);
	      this.startValue = value;
	      this.startPosition = position;

	      var state = this.state;
	      var upperBound = state.upperBound;
	      var lowerBound = state.lowerBound;

	      var valueNeedChanging = 'upperBound';
	      if (this.props.range) {
	        var isLowerBoundCloser = Math.abs(upperBound - value) > Math.abs(lowerBound - value);
	        if (isLowerBoundCloser) {
	          valueNeedChanging = 'lowerBound';
	        }

	        var isAtTheSamePoint = upperBound === lowerBound;
	        if (isAtTheSamePoint) {
	          valueNeedChanging = state.recent;
	        }

	        if (isAtTheSamePoint && value !== upperBound) {
	          valueNeedChanging = value < upperBound ? 'lowerBound' : 'upperBound';
	        }
	      }

	      this.setState({
	        handle: valueNeedChanging,
	        recent: valueNeedChanging
	      });

	      var oldValue = state[valueNeedChanging];
	      if (value === oldValue) return;

	      this.onChange(_defineProperty({}, valueNeedChanging, value));
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      var _state2 = this.state;
	      var lowerBound = _state2.lowerBound;
	      var upperBound = _state2.upperBound;

	      return this.props.range ? [lowerBound, upperBound] : upperBound;
	    }
	  }, {
	    key: 'getSliderLength',
	    value: function getSliderLength() {
	      var slider = this.refs.slider;
	      if (!slider) {
	        return 0;
	      }

	      return slider.clientWidth;
	    }
	  }, {
	    key: 'getSliderStart',
	    value: function getSliderStart() {
	      var slider = this.refs.slider;
	      var rect = slider.getBoundingClientRect();

	      return rect.left;
	    }
	  }, {
	    key: 'getPrecision',
	    value: function getPrecision() {
	      var props = this.props;
	      var stepString = props.step.toString();
	      var precision = 0;
	      if (stepString.indexOf('.') >= 0) {
	        precision = stepString.length - stepString.indexOf('.') - 1;
	      }
	      return precision;
	    }
	  }, {
	    key: 'isValueOutOfBounds',
	    value: function isValueOutOfBounds(value, props) {
	      return value < props.min || value > props.max;
	    }
	  }, {
	    key: 'trimAlignValue',
	    value: function trimAlignValue(v, nextProps) {
	      var state = this.state || {};
	      var handle = state.handle;
	      var lowerBound = state.lowerBound;
	      var upperBound = state.upperBound;

	      var _objectAssign = (0, _objectAssign3['default'])({}, this.props, nextProps || {});

	      var marks = _objectAssign.marks;
	      var step = _objectAssign.step;
	      var min = _objectAssign.min;
	      var max = _objectAssign.max;
	      var allowCross = _objectAssign.allowCross;

	      var val = v;
	      if (val <= min) {
	        val = min;
	      }
	      if (val >= max) {
	        val = max;
	      }
	      if (!allowCross && handle === 'upperBound' && val <= lowerBound) {
	        val = lowerBound;
	      }
	      if (!allowCross && handle === 'lowerBound' && val >= upperBound) {
	        val = upperBound;
	      }

	      var points = Object.keys(marks).map(parseFloat);
	      if (step !== null) {
	        var closestStep = Math.round(val / step) * step;
	        points.push(closestStep);
	      }

	      var diffs = points.map(function (point) {
	        return Math.abs(val - point);
	      });
	      var closestPoint = points[diffs.indexOf(Math.min.apply(Math, diffs))];

	      return step !== null ? parseFloat(closestPoint.toFixed(this.getPrecision())) : closestPoint;
	    }
	  }, {
	    key: 'calcOffset',
	    value: function calcOffset(value) {
	      var _props = this.props;
	      var min = _props.min;
	      var max = _props.max;

	      var ratio = (value - min) / (max - min);
	      return ratio * 100;
	    }
	  }, {
	    key: 'calcValue',
	    value: function calcValue(offset) {
	      var _props2 = this.props;
	      var min = _props2.min;
	      var max = _props2.max;

	      var ratio = offset / this.getSliderLength();
	      return ratio * (max - min) + min;
	    }
	  }, {
	    key: 'calcValueByPos',
	    value: function calcValueByPos(position) {
	      var pixelOffset = position - this.getSliderStart();
	      var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
	      return nextValue;
	    }
	  }, {
	    key: 'addDocumentEvents',
	    value: function addDocumentEvents(type) {
	      if (type === 'touch') {
	        // just work for chrome iOS Safari and Android Browser
	        this.onTouchMoveListener = _rcUtil.Dom.addEventListener(document, 'touchmove', this.onTouchMove.bind(this));
	        this.onTouchUpListener = _rcUtil.Dom.addEventListener(document, 'touchend', this.end.bind(this, 'touch'));
	      } else if (type === 'mouse') {
	        this.onMouseMoveListener = _rcUtil.Dom.addEventListener(document, 'mousemove', this.onMouseMove.bind(this));
	        this.onMouseUpListener = _rcUtil.Dom.addEventListener(document, 'mouseup', this.end.bind(this, 'mouse'));
	      }
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents(type) {
	      if (type === 'touch') {
	        this.onTouchMoveListener.remove();
	        this.onTouchUpListener.remove();
	      } else if (type === 'mouse') {
	        this.onMouseMoveListener.remove();
	        this.onMouseUpListener.remove();
	      }
	    }
	  }, {
	    key: 'end',
	    value: function end(type) {
	      this.removeEvents(type);
	      this.props.onAfterChange(this.getValue());
	      this.setState({ handle: null });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classNames;

	      var _state3 = this.state;
	      var handle = _state3.handle;
	      var upperBound = _state3.upperBound;
	      var lowerBound = _state3.lowerBound;
	      var _props3 = this.props;
	      var className = _props3.className;
	      var prefixCls = _props3.prefixCls;
	      var disabled = _props3.disabled;
	      var dots = _props3.dots;
	      var included = _props3.included;
	      var range = _props3.range;
	      var step = _props3.step;
	      var marks = _props3.marks;
	      var max = _props3.max;
	      var min = _props3.min;
	      var tipTransitionName = _props3.tipTransitionName;
	      var tipFormatter = _props3.tipFormatter;
	      var children = _props3.children;

	      var upperOffset = this.calcOffset(upperBound);
	      var lowerOffset = this.calcOffset(lowerBound);

	      var handleClassName = prefixCls + '-handle';
	      var isNoTip = step === null || tipFormatter === null;

	      var upper = _react2['default'].createElement(_Handle2['default'], { className: handleClassName,
	        noTip: isNoTip, tipTransitionName: tipTransitionName, tipFormatter: tipFormatter,
	        offset: upperOffset, value: upperBound, dragging: handle === 'upperBound' });

	      var lower = null;
	      if (range) {
	        lower = _react2['default'].createElement(_Handle2['default'], { className: handleClassName,
	          noTip: isNoTip, tipTransitionName: tipTransitionName, tipFormatter: tipFormatter,
	          offset: lowerOffset, value: lowerBound, dragging: handle === 'lowerBound' });
	      }

	      var sliderClassName = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-disabled', disabled), _defineProperty(_classNames, className, !!className), _classNames));
	      var isIncluded = included || range;
	      return _react2['default'].createElement(
	        'div',
	        { ref: 'slider', className: sliderClassName,
	          onTouchStart: disabled ? noop : this.onTouchStart.bind(this),
	          onMouseDown: disabled ? noop : this.onMouseDown.bind(this) },
	        upper,
	        lower,
	        _react2['default'].createElement(_Track2['default'], { className: prefixCls + '-track', included: isIncluded,
	          offset: lowerOffset, length: upperOffset - lowerOffset }),
	        _react2['default'].createElement(_Steps2['default'], { prefixCls: prefixCls, marks: marks, dots: dots, step: step,
	          included: isIncluded, lowerBound: lowerBound,
	          upperBound: upperBound, max: max, min: min }),
	        _react2['default'].createElement(_Marks2['default'], { className: prefixCls + '-mark', marks: marks,
	          included: isIncluded, lowerBound: lowerBound,
	          upperBound: upperBound, max: max, min: min }),
	        children
	      );
	    }
	  }]);

	  return Slider;
	})(_react2['default'].Component);

	Slider.propTypes = {
	  min: _react2['default'].PropTypes.number,
	  max: _react2['default'].PropTypes.number,
	  step: _react2['default'].PropTypes.number,
	  defaultValue: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number)]),
	  value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number)]),
	  marks: _react2['default'].PropTypes.object,
	  included: _react2['default'].PropTypes.bool,
	  className: _react2['default'].PropTypes.string,
	  prefixCls: _react2['default'].PropTypes.string,
	  disabled: _react2['default'].PropTypes.bool,
	  children: _react2['default'].PropTypes.any,
	  onBeforeChange: _react2['default'].PropTypes.func,
	  onChange: _react2['default'].PropTypes.func,
	  onAfterChange: _react2['default'].PropTypes.func,
	  tipTransitionName: _react2['default'].PropTypes.string,
	  tipFormatter: _react2['default'].PropTypes.func,
	  dots: _react2['default'].PropTypes.bool,
	  range: _react2['default'].PropTypes.bool,
	  allowCross: _react2['default'].PropTypes.bool
	};

	Slider.defaultProps = {
	  prefixCls: 'rc-slider',
	  className: '',
	  tipTransitionName: '',
	  min: 0,
	  max: 100,
	  step: 1,
	  marks: {},
	  onBeforeChange: noop,
	  onChange: noop,
	  onAfterChange: noop,
	  tipFormatter: function tipFormatter(value) {
	    return value;
	  },
	  included: true,
	  disabled: false,
	  dots: false,
	  range: false,
	  allowCross: true
	};

	exports['default'] = Slider;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  guid: __webpack_require__(17),
	  classSet: __webpack_require__(18),
	  joinClasses: __webpack_require__(20),
	  KeyCode: __webpack_require__(21),
	  PureRenderMixin: __webpack_require__(22),
	  shallowEqual: __webpack_require__(23),
	  createChainedFunction: __webpack_require__(28),
	  Dom: {
	    addEventListener: __webpack_require__(29),
	    contains: __webpack_require__(34)
	  },
	  Children: {
	    toArray: __webpack_require__(35),
	    mapSelf: __webpack_require__(36)
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	var seed = 0;
	module.exports = function guid() {
	  return Date.now() + '_' + seed++;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var deprecate = __webpack_require__(19);
	var classNames = __webpack_require__(7);

	module.exports = deprecate(classNames, '`rcUtil.classSet()` is deprecated, use `classNames()` by `require(\'classnames\')` instead');

/***/ },
/* 19 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module exports.
	 */

	module.exports = deprecate;

	/**
	 * Mark that a method should not be used.
	 * Returns a modified function which warns once by default.
	 *
	 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
	 *
	 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
	 * will throw an Error when invoked.
	 *
	 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
	 * will invoke `console.trace()` instead of `console.error()`.
	 *
	 * @param {Function} fn - the function to deprecate
	 * @param {String} msg - the string to print to the console when `fn` is invoked
	 * @returns {Function} a new "deprecated" version of `fn`
	 * @api public
	 */

	function deprecate (fn, msg) {
	  if (config('noDeprecation')) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (config('throwDeprecation')) {
	        throw new Error(msg);
	      } else if (config('traceDeprecation')) {
	        console.trace(msg);
	      } else {
	        console.warn(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	}

	/**
	 * Checks `localStorage` for boolean values for the given `name`.
	 *
	 * @param {String} name
	 * @returns {Boolean}
	 * @api private
	 */

	function config (name) {
	  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
	  try {
	    if (!global.localStorage) return false;
	  } catch (_) {
	    return false;
	  }
	  var val = global.localStorage[name];
	  if (null == val) return false;
	  return String(val).toLowerCase() === 'true';
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var deprecate = __webpack_require__(19);
	var classNames = __webpack_require__(7);

	module.exports = deprecate(classNames, '`rcUtil.joinClasses()` is deprecated, use `classNames()` by `require(\'classnames\')` instead');

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */

	'use strict';

	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};

	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }

	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};

	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }

	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }

	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }

	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }

	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};

	module.exports = KeyCode;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var shallowEqual = __webpack_require__(23);

	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   const ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
	  }
	};

	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var fetchKeys = __webpack_require__(24);

	module.exports = function shallowEqual(objA, objB, compare, compareContext) {

	    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

	    if (ret !== void 0) {
	        return !!ret;
	    }

	    if (objA === objB) {
	        return true;
	    }

	    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	        return false;
	    }

	    var keysA = fetchKeys(objA);
	    var keysB = fetchKeys(objB);

	    var len = keysA.length;
	    if (len !== keysB.length) {
	        return false;
	    }

	    compareContext = compareContext || null;

	    // Test for A's keys different from B.
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	    for (var i = 0; i < len; i++) {
	        var key = keysA[i];
	        if (!bHasOwnProperty(key)) {
	            return false;
	        }
	        var valueA = objA[key];
	        var valueB = objB[key];

	        var _ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	        if (_ret === false || _ret === void 0 && valueA !== valueB) {
	            return false;
	        }
	    }

	    return true;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(25),
	    isArguments = __webpack_require__(26),
	    isArray = __webpack_require__(27);

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;

	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));

	  var index = -1,
	      result = [];

	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = getNative;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isArguments;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isArray;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @returns {function|null}
	 */
	"use strict";

	function createChainedFunction() {
	  var args = arguments;
	  return function chainedFunction() {
	    for (var i = 0; i < args.length; i++) {
	      if (args[i] && args[i].apply) {
	        args[i].apply(this, arguments);
	      }
	    }
	  };
	}

	module.exports = createChainedFunction;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListenerWrap;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _addDomEventListener = __webpack_require__(30);

	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

	var _reactDom = __webpack_require__(4);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
	    _reactDom2['default'].unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2['default'])(target, eventType, callback);
	}

	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListener;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _EventObject = __webpack_require__(31);

	var _EventObject2 = _interopRequireDefault(_EventObject);

	function addEventListener(target, eventType, callback) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2['default'](e);
	    callback.call(target, ne);
	  }

	  if (target.addEventListener) {
	    target.addEventListener(eventType, wrapCallback, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventType, wrapCallback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _EventBaseObject = __webpack_require__(32);

	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

	var _objectAssign = __webpack_require__(33);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}

	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }

	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = undefined;
	    var deltaY = undefined;
	    var delta = undefined;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;

	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }

	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }

	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }

	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }

	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }

	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }

	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }

	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = undefined;
	    var doc = undefined;
	    var body = undefined;
	    var target = event.target;
	    var button = nativeEvent.button;

	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }

	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }

	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }

	    return event;
	  }
	}];

	function retTrue() {
	  return TRUE;
	}

	function retFalse() {
	  return FALSE;
	}

	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;

	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

	  _EventBaseObject2['default'].call(this);

	  this.nativeEvent = nativeEvent;

	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }

	  this.isDefaultPrevented = isDefaultPrevented;

	  var fixFns = [];
	  var fixFn = undefined;
	  var l = undefined;
	  var prop = undefined;
	  var props = commonProps.concat();

	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });

	  l = props.length;

	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }

	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }

	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }

	  l = fixFns.length;

	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }

	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}

	var EventBaseObjectProto = _EventBaseObject2['default'].prototype;

	(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,

	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;

	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }

	    EventBaseObjectProto.preventDefault.call(this);
	  },

	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;

	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }

	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});

	exports['default'] = DomEventObject;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function returnFalse() {
	  return false;
	}

	function returnTrue() {
	  return true;
	}

	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}

	EventBaseObject.prototype = {
	  isEventObject: 1,

	  constructor: EventBaseObject,

	  isDefaultPrevented: returnFalse,

	  isPropagationStopped: returnFalse,

	  isImmediatePropagationStopped: returnFalse,

	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },

	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },

	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },

	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};

	exports["default"] = EventBaseObject;
	module.exports = exports["default"];

/***/ },
/* 33 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }

	  return false;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	module.exports = function toArray(children) {
	  var ret = [];
	  React.Children.forEach(children, function each(c) {
	    ret.push(c);
	  });
	  return ret;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	function mirror(o) {
	  return o;
	}

	module.exports = function mapSelf(children) {
	  // return ReactFragment
	  return React.Children.map(children, mirror);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var Track = function Track(_ref) {
	  var className = _ref.className;
	  var included = _ref.included;
	  var offset = _ref.offset;
	  var length = _ref.length;

	  var style = {
	    left: offset + '%',
	    width: length + '%',
	    visibility: included ? 'visible' : 'hidden'
	  };
	  return _react2['default'].createElement('div', { className: className, style: style });
	};

	exports['default'] = Track;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcTooltip = __webpack_require__(39);

	var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

	var Handle = (function (_React$Component) {
	  _inherits(Handle, _React$Component);

	  function Handle(props) {
	    _classCallCheck(this, Handle);

	    _get(Object.getPrototypeOf(Handle.prototype), 'constructor', this).call(this, props);

	    this.state = {
	      isTooltipVisible: false
	    };
	  }

	  _createClass(Handle, [{
	    key: 'showTooltip',
	    value: function showTooltip() {
	      this.setState({
	        isTooltipVisible: true
	      });
	    }
	  }, {
	    key: 'hideTooltip',
	    value: function hideTooltip() {
	      this.setState({
	        isTooltipVisible: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var className = props.className;
	      var tipTransitionName = props.tipTransitionName;
	      var tipFormatter = props.tipFormatter;
	      var offset = props.offset;
	      var value = props.value;
	      var dragging = props.dragging;
	      var noTip = props.noTip;

	      var style = { left: offset + '%' };
	      var handle = _react2['default'].createElement('div', { className: className, style: style,
	        onMouseUp: this.showTooltip.bind(this),
	        onMouseEnter: this.showTooltip.bind(this),
	        onMouseLeave: this.hideTooltip.bind(this) });

	      if (noTip) {
	        return handle;
	      }

	      var isTooltipVisible = dragging || this.state.isTooltipVisible;
	      return _react2['default'].createElement(
	        _rcTooltip2['default'],
	        {
	          prefixCls: className.replace('slider-handle', 'tooltip'),
	          placement: 'top',
	          visible: isTooltipVisible,
	          overlay: _react2['default'].createElement(
	            'span',
	            null,
	            tipFormatter(value)
	          ),
	          delay: 0,
	          transitionName: tipTransitionName },
	        handle
	      );
	    }
	  }]);

	  return Handle;
	})(_react2['default'].Component);

	exports['default'] = Handle;

	Handle.propTypes = {
	  className: _react2['default'].PropTypes.string,
	  offset: _react2['default'].PropTypes.number,
	  tipTransitionName: _react2['default'].PropTypes.string,
	  tipFormatter: _react2['default'].PropTypes.func,
	  value: _react2['default'].PropTypes.number,
	  dragging: _react2['default'].PropTypes.bool,
	  noTip: _react2['default'].PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(40);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _placements = __webpack_require__(41);

	var _rcTrigger = __webpack_require__(42);

	var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

	var Tooltip = _react2['default'].createClass({
	  displayName: 'Tooltip',

	  propTypes: {
	    trigger: _react.PropTypes.any,
	    children: _react.PropTypes.any,
	    defaultVisible: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    placement: _react.PropTypes.string,
	    transitionName: _react.PropTypes.string,
	    animation: _react.PropTypes.any,
	    onVisibleChange: _react.PropTypes.func,
	    afterVisibleChange: _react.PropTypes.func,
	    overlay: _react.PropTypes.node.isRequired,
	    overlayStyle: _react.PropTypes.object,
	    overlayClassName: _react.PropTypes.string,
	    prefixCls: _react.PropTypes.string,
	    mouseEnterDelay: _react.PropTypes.number,
	    mouseLeaveDelay: _react.PropTypes.number,
	    getTooltipContainer: _react.PropTypes.func,
	    destroyTooltipOnHide: _react.PropTypes.bool,
	    align: _react.PropTypes.shape({
	      offset: _react.PropTypes.array,
	      targetOffset: _react.PropTypes.array
	    }),
	    arrowContent: _react.PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-tooltip',
	      mouseEnterDelay: 0,
	      destroyTooltipOnHide: false,
	      mouseLeaveDelay: 0.1,
	      align: {},
	      placement: 'right',
	      trigger: ['hover'],
	      arrowContent: null
	    };
	  },

	  getPopupElement: function getPopupElement() {
	    var _props = this.props;
	    var arrowContent = _props.arrowContent;
	    var overlay = _props.overlay;
	    var prefixCls = _props.prefixCls;

	    return [_react2['default'].createElement(
	      'div',
	      { className: prefixCls + '-arrow', key: 'arrow' },
	      arrowContent
	    ), _react2['default'].createElement(
	      'div',
	      { className: prefixCls + '-inner', key: 'content' },
	      overlay
	    )];
	  },

	  getPopupDomNode: function getPopupDomNode() {
	    return this.refs.trigger.popupDomNode;
	  },

	  render: function render() {
	    var _props2 = this.props;
	    var overlayClassName = _props2.overlayClassName;
	    var trigger = _props2.trigger;
	    var mouseEnterDelay = _props2.mouseEnterDelay;
	    var mouseLeaveDelay = _props2.mouseLeaveDelay;
	    var overlayStyle = _props2.overlayStyle;
	    var prefixCls = _props2.prefixCls;
	    var children = _props2.children;
	    var onVisibleChange = _props2.onVisibleChange;
	    var transitionName = _props2.transitionName;
	    var animation = _props2.animation;
	    var placement = _props2.placement;
	    var align = _props2.align;
	    var destroyTooltipOnHide = _props2.destroyTooltipOnHide;
	    var defaultVisible = _props2.defaultVisible;
	    var getTooltipContainer = _props2.getTooltipContainer;

	    var restProps = _objectWithoutProperties(_props2, ['overlayClassName', 'trigger', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayStyle', 'prefixCls', 'children', 'onVisibleChange', 'transitionName', 'animation', 'placement', 'align', 'destroyTooltipOnHide', 'defaultVisible', 'getTooltipContainer']);

	    var extraProps = _extends({}, restProps);
	    if ('visible' in this.props) {
	      extraProps.popupVisible = this.props.visible;
	    }
	    return _react2['default'].createElement(
	      _rcTrigger2['default'],
	      _extends({ popupClassName: overlayClassName,
	        ref: 'trigger',
	        prefixCls: prefixCls,
	        popup: this.getPopupElement(),
	        action: trigger,
	        builtinPlacements: _placements.placements,
	        popupPlacement: placement,
	        popupAlign: align,
	        getPopupContainer: getTooltipContainer,
	        onPopupVisibleChange: onVisibleChange,
	        popupTransitionName: transitionName,
	        popupAnimation: animation,
	        defaultPopupVisible: defaultVisible,
	        destroyPopupOnHide: destroyTooltipOnHide,
	        mouseLeaveDelay: mouseLeaveDelay,
	        popupStyle: overlayStyle,
	        mouseEnterDelay: mouseEnterDelay
	      }, extraProps),
	      children
	    );
	  }
	});

	exports['default'] = Tooltip;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var autoAdjustOverflow = {
	  adjustX: 1,
	  adjustY: 1
	};

	var targetOffset = [0, 0];

	var placements = {
	  left: {
	    points: ['cr', 'cl'],
	    overflow: autoAdjustOverflow,
	    offset: [-4, 0],
	    targetOffset: targetOffset
	  },
	  right: {
	    points: ['cl', 'cr'],
	    overflow: autoAdjustOverflow,
	    offset: [4, 0],
	    targetOffset: targetOffset
	  },
	  top: {
	    points: ['bc', 'tc'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  bottom: {
	    points: ['tc', 'bc'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  },
	  topLeft: {
	    points: ['bl', 'tl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  leftTop: {
	    points: ['tr', 'tl'],
	    overflow: autoAdjustOverflow,
	    offset: [-3, 0],
	    targetOffset: targetOffset
	  },
	  topRight: {
	    points: ['br', 'tr'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  rightTop: {
	    points: ['tl', 'tr'],
	    overflow: autoAdjustOverflow,
	    offset: [4, 0],
	    targetOffset: targetOffset
	  },
	  bottomRight: {
	    points: ['tr', 'br'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  },
	  rightBottom: {
	    points: ['bl', 'br'],
	    overflow: autoAdjustOverflow,
	    offset: [4, 0],
	    targetOffset: targetOffset
	  },
	  bottomLeft: {
	    points: ['tl', 'bl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  },
	  leftBottom: {
	    points: ['br', 'bl'],
	    overflow: autoAdjustOverflow,
	    offset: [-4, 0],
	    targetOffset: targetOffset
	  }
	};

	exports.placements = placements;
	exports['default'] = placements;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(43);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(4);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _rcUtil = __webpack_require__(16);

	var _Popup = __webpack_require__(44);

	var _Popup2 = _interopRequireDefault(_Popup);

	var _utils = __webpack_require__(66);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function noop() {}

	function returnEmptyString() {
	  return '';
	}

	var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];

	var Trigger = _react2["default"].createClass({
	  displayName: 'Trigger',

	  propTypes: {
	    action: _react.PropTypes.any,
	    showAction: _react.PropTypes.any,
	    hideAction: _react.PropTypes.any,
	    getPopupClassNameFromAlign: _react.PropTypes.any,
	    onPopupVisibleChange: _react.PropTypes.func,
	    afterPopupVisibleChange: _react.PropTypes.func,
	    popup: _react.PropTypes.node.isRequired,
	    popupStyle: _react.PropTypes.object,
	    prefixCls: _react.PropTypes.string,
	    popupClassName: _react.PropTypes.string,
	    popupPlacement: _react.PropTypes.string,
	    builtinPlacements: _react.PropTypes.object,
	    popupTransitionName: _react.PropTypes.string,
	    popupAnimation: _react.PropTypes.any,
	    mouseEnterDelay: _react.PropTypes.number,
	    mouseLeaveDelay: _react.PropTypes.number,
	    zIndex: _react.PropTypes.number,
	    focusDelay: _react.PropTypes.number,
	    blurDelay: _react.PropTypes.number,
	    getPopupContainer: _react.PropTypes.func,
	    destroyPopupOnHide: _react.PropTypes.bool,
	    mask: _react.PropTypes.bool,
	    popupAlign: _react.PropTypes.object,
	    popupVisible: _react.PropTypes.bool,
	    maskTransitionName: _react.PropTypes.string,
	    maskAnimation: _react.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-trigger-popup',
	      getPopupClassNameFromAlign: returnEmptyString,
	      onPopupVisibleChange: noop,
	      afterPopupVisibleChange: noop,
	      popupClassName: '',
	      mouseEnterDelay: 0,
	      mouseLeaveDelay: 0.1,
	      focusDelay: 0,
	      blurDelay: 0.15,
	      popupStyle: {},
	      destroyPopupOnHide: false,
	      popupAlign: {},
	      defaultPopupVisible: false,
	      mask: false,
	      action: [],
	      showAction: [],
	      hideAction: []
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var popupVisible = void 0;
	    if ('popupVisible' in props) {
	      popupVisible = !!props.popupVisible;
	    } else {
	      popupVisible = !!props.defaultPopupVisible;
	    }
	    return {
	      popupVisible: popupVisible
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate({}, {
	      popupVisible: this.state.popupVisible
	    });
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('popupVisible' in nextProps) {
	      this.setState({
	        popupVisible: !!nextProps.popupVisible
	      });
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    var _this = this;

	    var props = this.props;
	    var state = this.state;
	    if (this.popupRendered) {
	      var _ret = function () {
	        var self = _this;
	        _reactDom2["default"].unstable_renderSubtreeIntoContainer(_this, _this.getPopupElement(), _this.getPopupContainer(), function renderPopup() {
	          /* eslint react/no-is-mounted:0 */
	          if (this.isMounted()) {
	            self.popupDomNode = this.getPopupDomNode();
	          } else {
	            self.popupDomNode = null;
	          }
	          if (prevState.popupVisible !== state.popupVisible) {
	            props.afterPopupVisibleChange(state.popupVisible);
	          }
	        });
	        if (props.action.indexOf('click') !== -1) {
	          if (state.popupVisible) {
	            if (!_this.clickOutsideHandler) {
	              _this.clickOutsideHandler = _rcUtil.Dom.addEventListener(document, 'mousedown', _this.onDocumentClick);
	              _this.touchOutsideHandler = _rcUtil.Dom.addEventListener(document, 'touchstart', _this.onDocumentClick);
	            }
	            return {
	              v: void 0
	            };
	          }
	        }
	        if (_this.clickOutsideHandler) {
	          _this.clickOutsideHandler.remove();
	          _this.touchOutsideHandler.remove();
	          _this.clickOutsideHandler = null;
	          _this.touchOutsideHandler = null;
	        }
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    var popupContainer = this.popupContainer;
	    if (popupContainer) {
	      _reactDom2["default"].unmountComponentAtNode(popupContainer);
	      if (this.props.getPopupContainer) {
	        var mountNode = this.props.getPopupContainer((0, _reactDom.findDOMNode)(this));
	        mountNode.removeChild(popupContainer);
	      } else {
	        document.body.removeChild(popupContainer);
	      }
	      this.popupContainer = null;
	    }
	    this.clearDelayTimer();
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.touchOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	      this.touchOutsideHandler = null;
	    }
	  },
	  onMouseEnter: function onMouseEnter() {
	    this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
	  },
	  onMouseLeave: function onMouseLeave() {
	    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
	  },
	  onFocus: function onFocus() {
	    this.focusTime = Date.now();
	    this.delaySetPopupVisible(true, this.props.focusDelay);
	  },
	  onMouseDown: function onMouseDown() {
	    this.preClickTime = Date.now();
	  },
	  onTouchStart: function onTouchStart() {
	    this.preTouchTime = Date.now();
	  },
	  onBlur: function onBlur() {
	    this.delaySetPopupVisible(false, this.props.blurDelay);
	  },
	  onClick: function onClick(event) {
	    // focus will trigger click
	    if (this.focusTime) {
	      var preTime = void 0;
	      if (this.preClickTime && this.preTouchTime) {
	        preTime = Math.min(this.preClickTime, this.preTouchTime);
	      } else if (this.preClickTime) {
	        preTime = this.preClickTime;
	      } else if (this.preTouchTime) {
	        preTime = this.preTouchTime;
	      }
	      if (Math.abs(preTime - this.focusTime) < 20) {
	        return;
	      }
	      this.focusTime = 0;
	    }
	    this.preClickTime = 0;
	    this.preTouchTime = 0;
	    event.preventDefault();
	    var nextVisible = !this.state.popupVisible;
	    if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
	      this.setPopupVisible(!this.state.popupVisible);
	    }
	  },
	  onDocumentClick: function onDocumentClick(event) {
	    var target = event.target;
	    var root = (0, _reactDom.findDOMNode)(this);
	    var popupNode = this.getPopupDomNode();
	    if (!_rcUtil.Dom.contains(root, target) && !_rcUtil.Dom.contains(popupNode, target)) {
	      this.setPopupVisible(false);
	    }
	  },
	  getPopupDomNode: function getPopupDomNode() {
	    // for test
	    return this.popupDomNode;
	  },
	  getRootDomNode: function getRootDomNode() {
	    return _reactDom2["default"].findDOMNode(this);
	  },
	  getPopupContainer: function getPopupContainer() {
	    if (!this.popupContainer) {
	      this.popupContainer = document.createElement('div');
	      if (this.props.getPopupContainer) {
	        var mountNode = this.props.getPopupContainer((0, _reactDom.findDOMNode)(this));
	        mountNode.appendChild(this.popupContainer);
	      } else {
	        document.body.appendChild(this.popupContainer);
	      }
	    }
	    return this.popupContainer;
	  },
	  getPopupClassNameFromAlign: function getPopupClassNameFromAlign(align) {
	    var className = [];
	    var props = this.props;
	    var popupPlacement = props.popupPlacement;
	    var builtinPlacements = props.builtinPlacements;
	    var prefixCls = props.prefixCls;

	    if (popupPlacement && builtinPlacements) {
	      className.push((0, _utils.getPopupClassNameFromAlign)(builtinPlacements, prefixCls, align));
	    }
	    if (props.getPopupClassNameFromAlign) {
	      className.push(props.getPopupClassNameFromAlign(align));
	    }
	    return className.join(' ');
	  },
	  getPopupAlign: function getPopupAlign() {
	    var props = this.props;
	    var popupPlacement = props.popupPlacement;
	    var popupAlign = props.popupAlign;
	    var builtinPlacements = props.builtinPlacements;

	    if (popupPlacement && builtinPlacements) {
	      return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
	    }
	    return popupAlign;
	  },
	  getPopupElement: function getPopupElement() {
	    var props = this.props;
	    var state = this.state;
	    var mouseProps = {};
	    if (props.action.indexOf('hover') !== -1) {
	      mouseProps.onMouseEnter = this.onMouseEnter;
	      mouseProps.onMouseLeave = this.onMouseLeave;
	    }
	    return _react2["default"].createElement(
	      _Popup2["default"],
	      _extends({
	        prefixCls: props.prefixCls,
	        destroyPopupOnHide: props.destroyPopupOnHide,
	        visible: state.popupVisible,
	        className: props.popupClassName,
	        action: props.action,
	        align: this.getPopupAlign(),
	        animation: props.popupAnimation,
	        getClassNameFromAlign: this.getPopupClassNameFromAlign
	      }, mouseProps, {
	        getRootDomNode: this.getRootDomNode,
	        style: props.popupStyle,
	        mask: props.mask,
	        zIndex: props.zIndex,
	        transitionName: props.popupTransitionName,
	        maskAnimation: props.maskAnimation,
	        maskTransitionName: props.maskTransitionName
	      }),
	      props.popup
	    );
	  },
	  setPopupVisible: function setPopupVisible(popupVisible) {
	    this.clearDelayTimer();
	    if (this.state.popupVisible !== popupVisible) {
	      if (!('popupVisible' in this.props)) {
	        this.setState({
	          popupVisible: popupVisible
	        });
	      }
	      this.props.onPopupVisibleChange(popupVisible);
	    }
	  },
	  delaySetPopupVisible: function delaySetPopupVisible(visible, delayS) {
	    var _this2 = this;

	    var delay = delayS * 1000;
	    this.clearDelayTimer();
	    if (delay) {
	      this.delayTimer = setTimeout(function () {
	        _this2.setPopupVisible(visible);
	        _this2.clearDelayTimer();
	      }, delay);
	    } else {
	      this.setPopupVisible(visible);
	    }
	  },
	  clearDelayTimer: function clearDelayTimer() {
	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	      this.delayTimer = null;
	    }
	  },
	  isClickToShow: function isClickToShow() {
	    var _props = this.props;
	    var action = _props.action;
	    var showAction = _props.showAction;

	    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
	  },
	  isClickToHide: function isClickToHide() {
	    var _props2 = this.props;
	    var action = _props2.action;
	    var hideAction = _props2.hideAction;

	    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
	  },
	  isMouseEnterToShow: function isMouseEnterToShow() {
	    var _props3 = this.props;
	    var action = _props3.action;
	    var showAction = _props3.showAction;

	    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
	  },
	  isMouseLeaveToHide: function isMouseLeaveToHide() {
	    var _props4 = this.props;
	    var action = _props4.action;
	    var hideAction = _props4.hideAction;

	    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
	  },
	  isFocusToShow: function isFocusToShow() {
	    var _props5 = this.props;
	    var action = _props5.action;
	    var showAction = _props5.showAction;

	    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
	  },
	  isBlurToHide: function isBlurToHide() {
	    var _props6 = this.props;
	    var action = _props6.action;
	    var hideAction = _props6.hideAction;

	    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
	  },
	  render: function render() {
	    this.popupRendered = this.popupRendered || this.state.popupVisible;
	    var props = this.props;
	    var children = props.children;
	    var child = _react2["default"].Children.only(children);
	    var childProps = child.props || {};
	    var newChildProps = {};

	    if (this.isClickToHide() || this.isClickToShow()) {
	      newChildProps.onClick = (0, _rcUtil.createChainedFunction)(this.onClick, childProps.onClick);
	      newChildProps.onMouseDown = (0, _rcUtil.createChainedFunction)(this.onMouseDown, childProps.onMouseDown);
	      newChildProps.onTouchStart = (0, _rcUtil.createChainedFunction)(this.onTouchStart, childProps.onTouchStart);
	    }
	    if (this.isMouseEnterToShow()) {
	      newChildProps.onMouseEnter = (0, _rcUtil.createChainedFunction)(this.onMouseEnter, childProps.onMouseEnter);
	    }
	    if (this.isMouseLeaveToHide()) {
	      newChildProps.onMouseLeave = (0, _rcUtil.createChainedFunction)(this.onMouseLeave, childProps.onMouseLeave);
	    }
	    if (this.isFocusToShow()) {
	      newChildProps.onFocus = (0, _rcUtil.createChainedFunction)(this.onFocus, childProps.onFocus);
	    }
	    if (this.isBlurToHide()) {
	      newChildProps.onBlur = (0, _rcUtil.createChainedFunction)(this.onBlur, childProps.onBlur);
	    }

	    ALL_HANDLERS.forEach(function (handler) {
	      var newFn = void 0;
	      if (props[handler] && newChildProps[handler]) {
	        newFn = (0, _rcUtil.createChainedFunction)(props[handler], newChildProps[handler]);
	      } else {
	        newFn = props[handler] || newChildProps[handler];
	      }
	      if (newFn) {
	        newChildProps[handler] = newFn;
	      }
	    });

	    return _react2["default"].cloneElement(child, newChildProps);
	  }
	});

	exports["default"] = Trigger;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(4);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _rcAlign = __webpack_require__(45);

	var _rcAlign2 = _interopRequireDefault(_rcAlign);

	var _rcAnimate = __webpack_require__(56);

	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

	var _PopupInner = __webpack_require__(64);

	var _PopupInner2 = _interopRequireDefault(_PopupInner);

	var _LazyRenderBox = __webpack_require__(65);

	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var Popup = _react2["default"].createClass({
	  displayName: 'Popup',

	  propTypes: {
	    visible: _react.PropTypes.bool,
	    style: _react.PropTypes.object,
	    getClassNameFromAlign: _react.PropTypes.func,
	    getRootDomNode: _react.PropTypes.func,
	    onMouseEnter: _react.PropTypes.func,
	    align: _react.PropTypes.any,
	    destroyPopupOnHide: _react.PropTypes.bool,
	    className: _react.PropTypes.string,
	    prefixCls: _react.PropTypes.string,
	    onMouseLeave: _react.PropTypes.func
	  },

	  componentDidMount: function componentDidMount() {
	    this.rootNode = this.getPopupDomNode();
	  },
	  onAlign: function onAlign(popupDomNode, align) {
	    var props = this.props;
	    var alignClassName = props.getClassNameFromAlign(props.align);
	    var currentAlignClassName = props.getClassNameFromAlign(align);
	    if (alignClassName !== currentAlignClassName) {
	      this.currentAlignClassName = currentAlignClassName;
	      popupDomNode.className = this.getClassName(currentAlignClassName);
	    }
	  },
	  getPopupDomNode: function getPopupDomNode() {
	    return _reactDom2["default"].findDOMNode(this.refs.popup);
	  },
	  getTarget: function getTarget() {
	    return this.props.getRootDomNode();
	  },
	  getMaskTransitionName: function getMaskTransitionName() {
	    var props = this.props;
	    var transitionName = props.maskTransitionName;
	    var animation = props.maskAnimation;
	    if (!transitionName && animation) {
	      transitionName = props.prefixCls + '-' + animation;
	    }
	    return transitionName;
	  },
	  getTransitionName: function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.prefixCls + '-' + props.animation;
	    }
	    return transitionName;
	  },
	  getClassName: function getClassName(currentAlignClassName) {
	    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
	  },
	  getPopupElement: function getPopupElement() {
	    var props = this.props;
	    var align = props.align;
	    var style = props.style;
	    var visible = props.visible;
	    var prefixCls = props.prefixCls;
	    var destroyPopupOnHide = props.destroyPopupOnHide;

	    var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
	    var hiddenClassName = prefixCls + '-hidden';
	    if (!visible) {
	      this.currentAlignClassName = null;
	    }
	    var newStyle = _extends({}, style, this.getZIndexStyle());
	    var popupInnerProps = {
	      className: className,
	      prefixCls: prefixCls,
	      ref: 'popup',
	      onMouseEnter: props.onMouseEnter,
	      onMouseLeave: props.onMouseLeave,
	      style: newStyle
	    };
	    if (destroyPopupOnHide) {
	      return _react2["default"].createElement(
	        _rcAnimate2["default"],
	        {
	          component: '',
	          exclusive: true,
	          transitionAppear: true,
	          transitionName: this.getTransitionName()
	        },
	        visible ? _react2["default"].createElement(
	          _rcAlign2["default"],
	          {
	            target: this.getTarget,
	            key: 'popup',
	            monitorWindowResize: true,
	            align: align,
	            onAlign: this.onAlign
	          },
	          _react2["default"].createElement(
	            _PopupInner2["default"],
	            _extends({
	              visible: true
	            }, popupInnerProps),
	            props.children
	          )
	        ) : null
	      );
	    }
	    return _react2["default"].createElement(
	      _rcAnimate2["default"],
	      {
	        component: '',
	        exclusive: true,
	        transitionAppear: true,
	        transitionName: this.getTransitionName(),
	        showProp: 'xVisible'
	      },
	      _react2["default"].createElement(
	        _rcAlign2["default"],
	        {
	          target: this.getTarget,
	          key: 'popup',
	          monitorWindowResize: true,
	          xVisible: visible,
	          childrenProps: { visible: 'xVisible' },
	          disabled: !visible,
	          align: align,
	          onAlign: this.onAlign
	        },
	        _react2["default"].createElement(
	          _PopupInner2["default"],
	          _extends({
	            hiddenClassName: hiddenClassName
	          }, popupInnerProps),
	          props.children
	        )
	      )
	    );
	  },
	  getZIndexStyle: function getZIndexStyle() {
	    var style = {};
	    var props = this.props;
	    if (props.zIndex !== undefined) {
	      style.zIndex = props.zIndex;
	    }
	    return style;
	  },
	  getMaskElement: function getMaskElement() {
	    var props = this.props;
	    var maskElement = void 0;
	    if (props.mask) {
	      var maskTransition = this.getMaskTransitionName();
	      maskElement = _react2["default"].createElement(_LazyRenderBox2["default"], {
	        style: this.getZIndexStyle(),
	        key: 'mask',
	        className: props.prefixCls + '-mask',
	        hiddenClassName: props.prefixCls + '-mask-hidden',
	        visible: props.visible
	      });
	      if (maskTransition) {
	        maskElement = _react2["default"].createElement(
	          _rcAnimate2["default"],
	          {
	            key: 'mask',
	            showProp: 'visible',
	            transitionAppear: true,
	            component: '',
	            transitionName: maskTransition
	          },
	          maskElement
	        );
	      }
	    }
	    return maskElement;
	  },
	  render: function render() {
	    return _react2["default"].createElement(
	      'div',
	      null,
	      this.getMaskElement(),
	      this.getPopupElement()
	    );
	  }
	});

	exports["default"] = Popup;
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Align = __webpack_require__(46);

	var _Align2 = _interopRequireDefault(_Align);

	exports['default'] = _Align2['default'];
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(4);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _domAlign = __webpack_require__(47);

	var _domAlign2 = _interopRequireDefault(_domAlign);

	var _rcUtil = __webpack_require__(16);

	var _isWindow = __webpack_require__(55);

	var _isWindow2 = _interopRequireDefault(_isWindow);

	function buffer(fn, ms) {
	  var timer = undefined;
	  return function bufferFn() {
	    if (timer) {
	      clearTimeout(timer);
	    }
	    timer = setTimeout(fn, ms);
	  };
	}

	var Align = _react2['default'].createClass({
	  displayName: 'Align',

	  propTypes: {
	    childrenProps: _react.PropTypes.object,
	    align: _react.PropTypes.object.isRequired,
	    target: _react.PropTypes.func,
	    onAlign: _react.PropTypes.func,
	    monitorBufferTime: _react.PropTypes.number,
	    monitorWindowResize: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    children: _react.PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      target: function target() {
	        return window;
	      },
	      onAlign: function onAlign() {},
	      monitorBufferTime: 50,
	      monitorWindowResize: false,
	      disabled: false
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    if (!props.disabled) {
	      var source = _reactDom2['default'].findDOMNode(this);
	      props.onAlign(source, (0, _domAlign2['default'])(source, props.target(), props.align));
	      if (props.monitorWindowResize) {
	        this.startMonitorWindowResize();
	      }
	    }
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var reAlign = false;
	    var props = this.props;
	    var currentTarget = undefined;

	    if (!props.disabled) {
	      if (prevProps.disabled || prevProps.align !== props.align) {
	        reAlign = true;
	        currentTarget = props.target();
	      } else {
	        var lastTarget = prevProps.target();
	        currentTarget = props.target();
	        if ((0, _isWindow2['default'])(lastTarget) && (0, _isWindow2['default'])(currentTarget)) {
	          reAlign = false;
	        } else if (lastTarget !== currentTarget) {
	          reAlign = true;
	        }
	      }
	    }

	    if (reAlign) {
	      var source = _reactDom2['default'].findDOMNode(this);
	      props.onAlign(source, (0, _domAlign2['default'])(source, currentTarget, props.align));
	    }

	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  },

	  onWindowResize: function onWindowResize() {
	    var props = this.props;
	    if (!props.disabled) {
	      var source = _reactDom2['default'].findDOMNode(this);
	      props.onAlign(source, (0, _domAlign2['default'])(source, props.target(), props.align));
	    }
	  },

	  startMonitorWindowResize: function startMonitorWindowResize() {
	    if (!this.resizeHandler) {
	      this.resizeHandler = _rcUtil.Dom.addEventListener(window, 'resize', buffer(this.onWindowResize, this.props.monitorBufferTime));
	    }
	  },

	  stopMonitorWindowResize: function stopMonitorWindowResize() {
	    if (this.resizeHandler) {
	      this.resizeHandler.remove();
	      this.resizeHandler = null;
	    }
	  },

	  render: function render() {
	    var _props = this.props;
	    var childrenProps = _props.childrenProps;
	    var children = _props.children;

	    var child = _react2['default'].Children.only(children);
	    if (childrenProps) {
	      var newProps = {};
	      for (var prop in childrenProps) {
	        if (childrenProps.hasOwnProperty(prop)) {
	          newProps[prop] = this.props[childrenProps[prop]];
	        }
	      }
	      return _react2['default'].cloneElement(child, newProps);
	    }
	    return child;
	  }
	});

	exports['default'] = Align;
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(48);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(49);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	var _getVisibleRectForElement = __webpack_require__(50);

	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);

	var _adjustForViewport = __webpack_require__(51);

	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);

	var _getRegion = __webpack_require__(52);

	var _getRegion2 = _interopRequireDefault(_getRegion);

	var _getElFuturePos = __webpack_require__(53);

	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);

	// http://yiminghe.iteye.com/blog/1124720

	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}

	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}

	function flip(points, reg, map) {
	  var ret = [];
	  _utils2['default'].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}

	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}

	function convertOffset(str, offsetLen) {
	  var n = undefined;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
	}

	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}

	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var target = align.target || refNode;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};

	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2['default'])(source);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = (0, _getRegion2['default'])(target);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, refNodeRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2['default'].merge(elRegion, elFuturePos);

	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 0);
	        targetOffset = flipOffset(targetOffset, 0);
	      }
	    }

	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 1);
	        targetOffset = flipOffset(targetOffset, 1);
	      }
	    }

	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
	      _utils2['default'].mix(newElRegion, elFuturePos);
	    }

	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);

	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);

	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2['default'])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }

	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2['default'].css(source, 'width', source.width() + newElRegion.width - elRegion.width);
	  }

	  if (newElRegion.height !== elRegion.height) {
	    _utils2['default'].css(source, 'height', source.height() + newElRegion.height - elRegion.height);
	  }

	  // https://github.com/kissyteam/kissy/issues/190
	  // http://localhost:8888/kissy/src/overlay/demo/other/relative_align/align.html
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2['default'].offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom
	  });

	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}

	domAlign.__getOffsetParent = _getOffsetParent2['default'];

	domAlign.__getVisibleRectForElement = _getVisibleRectForElement2['default'];

	exports['default'] = domAlign;

	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

	var getComputedStyleX = undefined;

	function css(el, name, v) {
	  var value = v;
	  if (typeof name === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}

	function getClientPosition(elem) {
	  var box = undefined;
	  var x = undefined;
	  var y = undefined;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();

	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

	  x = box.left;
	  y = box.top;

	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.

	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.

	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;

	  return { left: x, top: y };
	}

	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}

	function getScrollLeft(w) {
	  return getScroll(w);
	}

	function getScrollTop(w) {
	  return getScroll(w, true);
	}

	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = elem.ownerDocument;
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }

	  return val;
	}

	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';

	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];

	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;

	    // Revert the changed values
	    style[LEFT] = left;

	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}

	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}

	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
	}

	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	}

	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }

	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }

	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  var old = getOffset(elem);
	  var ret = {};
	  var key = undefined;
	  for (key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      if (dir === key) {
	        ret[dir] = preset + offset[key] - old[key];
	      } else {
	        ret[dir] = preset + old[key] - offset[key];
	      }
	    }
	  }
	  css(elem, ret);
	}

	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}

	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}

	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;

	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = undefined;

	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }

	  callback.call(elem);

	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}

	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = undefined;
	  var j = undefined;
	  var i = undefined;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = undefined;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}

	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}

	var domUtils = {};

	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };

	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});

	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}

	var cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' };

	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  var val = undefined;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}

	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});

	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}

	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = undefined;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};

	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },
	  viewportWidth: 0,
	  viewportHeight: 0
	};

	mix(utils, domUtils);

	exports['default'] = utils;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(48);

	var _utils2 = _interopRequireDefault(_utils);

	/**
	 * 得到会导致元素显示不全的祖先元素
	 */

	function getOffsetParent(element) {
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = element.ownerDocument;
	  var body = doc.body;
	  var parent = undefined;
	  var positionStyle = _utils2['default'].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }

	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}

	exports['default'] = getOffsetParent;
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(48);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(49);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	/**
	 * 获得元素的显示部分的区域
	 */
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = (0, _getOffsetParent2['default'])(element);
	  var scrollX = undefined;
	  var scrollY = undefined;
	  var winSize = undefined;
	  var doc = element.ownerDocument;
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;

	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2['default'].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2['default'].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = (0, _getOffsetParent2['default'])(el);
	  }

	  // Clip by window's viewport.
	  scrollX = _utils2['default'].getWindowScrollLeft(win);
	  scrollY = _utils2['default'].getWindowScrollTop(win);
	  visibleRect.left = Math.max(visibleRect.left, scrollX);
	  visibleRect.top = Math.max(visibleRect.top, scrollY);
	  winSize = {
	    width: _utils2['default'].viewportWidth(win),
	    height: _utils2['default'].viewportHeight(win)
	  };
	  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
	  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}

	exports['default'] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(48);

	var _utils2 = _interopRequireDefault(_utils);

	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2['default'].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };

	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }

	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }

	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }

	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }

	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }

	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }

	  return _utils2['default'].mix(pos, size);
	}

	exports['default'] = adjustForViewport;
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(48);

	var _utils2 = _interopRequireDefault(_utils);

	function getRegion(node) {
	  var offset = undefined;
	  var w = undefined;
	  var h = undefined;
	  if (!_utils2['default'].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2['default'].offset(node);
	    w = _utils2['default'].outerWidth(node);
	    h = _utils2['default'].outerHeight(node);
	  } else {
	    var win = _utils2['default'].getWindow(node);
	    offset = {
	      left: _utils2['default'].getWindowScrollLeft(win),
	      top: _utils2['default'].getWindowScrollTop(win)
	    };
	    w = _utils2['default'].viewportWidth(win);
	    h = _utils2['default'].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}

	exports['default'] = getRegion;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _getAlignOffset = __webpack_require__(54);

	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);

	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var xy = undefined;
	  var diff = undefined;
	  var p1 = undefined;
	  var p2 = undefined;

	  xy = {
	    left: elRegion.left,
	    top: elRegion.top
	  };

	  p1 = (0, _getAlignOffset2['default'])(refNodeRegion, points[1]);
	  p2 = (0, _getAlignOffset2['default'])(elRegion, points[0]);

	  diff = [p2.left - p1.left, p2.top - p1.top];

	  return {
	    left: xy.left - diff[0] + offset[0] - targetOffset[0],
	    top: xy.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}

	exports['default'] = getElFuturePos;
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports) {

	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	  var x = undefined;
	  var y = undefined;

	  x = region.left;
	  y = region.top;

	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }

	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }

	  return {
	    left: x,
	    top: y
	  };
	}

	exports['default'] = getAlignOffset;
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isWindow;

	function isWindow(obj) {
	  /* eslint no-eq-null: 0 */
	  /* eslint eqeqeq: 0 */
	  return obj != null && obj == obj.window;
	}

	module.exports = exports["default"];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';

	module.exports = __webpack_require__(57);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ChildrenUtils = __webpack_require__(58);

	var _AnimateChild = __webpack_require__(59);

	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);

	var _util = __webpack_require__(63);

	var _util2 = _interopRequireDefault(_util);

	var defaultKey = 'rc_animate_' + Date.now();

	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2['default'].isValidElement(children)) {
	    if (!children.key) {
	      return _react2['default'].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}

	function noop() {}

	var Animate = _react2['default'].createClass({
	  displayName: 'Animate',

	  propTypes: {
	    component: _react2['default'].PropTypes.any,
	    animation: _react2['default'].PropTypes.object,
	    transitionName: _react2['default'].PropTypes.string,
	    transitionEnter: _react2['default'].PropTypes.bool,
	    transitionAppear: _react2['default'].PropTypes.bool,
	    exclusive: _react2['default'].PropTypes.bool,
	    transitionLeave: _react2['default'].PropTypes.bool,
	    onEnd: _react2['default'].PropTypes.func,
	    onEnter: _react2['default'].PropTypes.func,
	    onLeave: _react2['default'].PropTypes.func,
	    onAppear: _react2['default'].PropTypes.func,
	    showProp: _react2['default'].PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: {},
	      component: 'span',
	      transitionEnter: true,
	      transitionLeave: true,
	      transitionAppear: false,
	      onEnd: noop,
	      onEnter: noop,
	      onLeave: noop,
	      onAppear: noop
	    };
	  },

	  getInitialState: function getInitialState() {
	    this.currentlyAnimatingKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	    return {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(this.props))
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    var _this = this;

	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (child) {
	        return !!child.props[showProp];
	      });
	    }
	    children.forEach(function (child) {
	      _this.performAppear(child.key);
	    });
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this2 = this;

	    this.nextProps = nextProps;
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    // exclusive needs immediate response
	    if (props.exclusive) {
	      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	        _this2.stop(key);
	      });
	    }
	    var showProp = props.showProp;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = undefined;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2['default'].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	      nextChildren.forEach(function (nextChild) {
	        if (!(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	          newChildren.push(nextChild);
	        }
	      });
	    } else {
	      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	    }

	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });

	    nextChildren.forEach(function (child) {
	      var key = child.key;
	      if (currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = child.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this2.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this2.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this2.keysToEnter.push(key);
	      }
	    });

	    currentChildren.forEach(function (child) {
	      var key = child.key;
	      if (currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = child.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this2.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this2.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this2.keysToLeave.push(key);
	      }
	    });
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    if (this.isMounted()) {
	      var keysToEnter = this.keysToEnter;
	      this.keysToEnter = [];
	      keysToEnter.forEach(this.performEnter);
	      var keysToLeave = this.keysToLeave;
	      this.keysToLeave = [];
	      keysToLeave.forEach(this.performLeave);
	    }
	  },

	  performEnter: function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  },

	  performAppear: function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  },

	  handleDoneAdding: function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2['default'].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2['default'].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  },

	  performLeave: function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  },

	  handleDoneLeaving: function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      if (_util2['default'].allowLeaveCallback(props)) {
	        props.onLeave(key);
	        props.onEnd(key, false);
	      }
	      if (this.isMounted() && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        });
	      }
	    }
	  },

	  isValidChildByKey: function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  },

	  stop: function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  },

	  render: function render() {
	    var props = this.props;
	    this.nextProps = props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (child === null) {
	          return child;
	        }
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2['default'].createElement(
	          _AnimateChild2['default'],
	          {
	            key: child.key,
	            ref: child.key,
	            animation: props.animation,
	            transitionName: props.transitionName,
	            transitionEnter: props.transitionEnter,
	            transitionAppear: props.transitionAppear,
	            transitionLeave: props.transitionLeave },
	          child
	        );
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      return _react2['default'].createElement(
	        Component,
	        this.props,
	        children
	      );
	    }
	    return children[0] || null;
	  }
	});

	exports['default'] = Animate;
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function toArrayChildren(children) {
	  var ret = [];
	  _react2['default'].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}

	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}

	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}

	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}

	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child.key !== child2.key) {
	        same = false;
	      } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	        same = false;
	      }
	    });
	  }
	  return same;
	}

	function mergeChildren(prev, next) {
	  var ret = [];

	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });

	  next.forEach(function (child) {
	    if (nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });

	  ret = ret.concat(pendingChildren);

	  return ret;
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(4);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _cssAnimation = __webpack_require__(60);

	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);

	var _util = __webpack_require__(63);

	var _util2 = _interopRequireDefault(_util);

	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};

	var AnimateChild = _react2['default'].createClass({
	  displayName: 'AnimateChild',

	  propTypes: {
	    children: _react2['default'].PropTypes.any
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this.stop();
	  },

	  componentWillEnter: function componentWillEnter(done) {
	    if (_util2['default'].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },

	  componentWillAppear: function componentWillAppear(done) {
	    if (_util2['default'].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  },

	  componentWillLeave: function componentWillLeave(done) {
	    if (_util2['default'].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      done();
	    }
	  },

	  transition: function transition(animationType, finishCallback) {
	    var _this = this;

	    var node = _reactDom2['default'].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    this.stop();
	    var end = function end() {
	      _this.stopper = null;
	      finishCallback();
	    };
	    if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      this.stopper = (0, _cssAnimation2['default'])(node, transitionName + '-' + animationType, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  },

	  stop: function stop() {
	    var stopper = this.stopper;
	    if (stopper) {
	      this.stopper = null;
	      stopper.stop();
	    }
	  },

	  render: function render() {
	    return this.props.children;
	  }
	});

	exports['default'] = AnimateChild;
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Event = __webpack_require__(61);
	var Css = __webpack_require__(62);
	var isCssAnimationSupported = Event.endEvents.length !== 0;

	function getDuration(node, name) {
	  var style = window.getComputedStyle(node);
	  var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}

	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDuration = parseFloat(getDuration(node, 'transition-duration')) || 0;
	    var animationDuration = parseFloat(getDuration(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration, animationDuration);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}

	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}

	var cssAnimation = function cssAnimation(node, transitionName, callback) {
	  var className = transitionName;
	  var activeClassName = className + '-active';

	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    Css.removeClass(node, className);
	    Css.removeClass(node, activeClassName);

	    Event.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };

	  Event.addEndEventListener(node, node.rcEndListener);

	  Css.addClass(node, className);

	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    Css.addClass(node, activeClassName);
	    fixBrowserByTimeout(node);
	  }, 0);

	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};

	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    Event.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };

	  Event.addEndEventListener(node, node.rcEndListener);

	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};

	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  ['Webkit', 'Moz', 'O',
	  // ms is special .... !
	  'ms'].forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};

	cssAnimation.addClass = Css.addClass;
	cssAnimation.removeClass = Css.removeClass;
	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

	module.exports = cssAnimation;

/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';

	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },

	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}

	if (typeof window !== 'undefined') {
	  detectEvents();
	}

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  endEvents: endEvents,

	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	module.exports = TransitionEvents;

/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';

	var SPACE = ' ';
	var RE_CLASS = /[\n\t\r]/g;

	function norm(elemClass) {
	  return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
	}

	module.exports = {
	  addClass: function addClass(elem, className) {
	    elem.className += ' ' + className;
	  },

	  removeClass: function removeClass(elem, n) {
	    var elemClass = elem.className.trim();
	    var className = norm(elemClass);
	    var needle = n.trim();
	    needle = SPACE + needle + SPACE;
	    // 一个 cls 有可能多次出现：'link link2 link link3 link'
	    while (className.indexOf(needle) >= 0) {
	      className = className.replace(needle, SPACE);
	    }
	    elem.className = className.trim();
	  }
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },

	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports["default"];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _LazyRenderBox = __webpack_require__(65);

	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var PopupInner = _react2["default"].createClass({
	  displayName: 'PopupInner',

	  propTypes: {
	    hiddenClassName: _react.PropTypes.string,
	    className: _react.PropTypes.string,
	    prefixCls: _react.PropTypes.string,
	    onMouseEnter: _react.PropTypes.func,
	    onMouseLeave: _react.PropTypes.func,
	    children: _react.PropTypes.any
	  },
	  render: function render() {
	    var props = this.props;
	    var className = props.className;
	    if (!props.visible) {
	      className += ' ' + props.hiddenClassName;
	    }
	    return _react2["default"].createElement(
	      'div',
	      {
	        className: className,
	        onMouseEnter: props.onMouseEnter,
	        onMouseLeave: props.onMouseLeave,
	        style: props.style
	      },
	      _react2["default"].createElement(
	        _LazyRenderBox2["default"],
	        { className: props.prefixCls + '-content', visible: props.visible },
	        props.children
	      )
	    );
	  }
	});

	exports["default"] = PopupInner;
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var LazyRenderBox = _react2["default"].createClass({
	  displayName: 'LazyRenderBox',

	  propTypes: {
	    children: _react.PropTypes.any,
	    className: _react.PropTypes.string,
	    visible: _react.PropTypes.bool,
	    hiddenClassName: _react.PropTypes.string
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return nextProps.hiddenClassName || nextProps.visible;
	  },
	  render: function render() {
	    if (this.props.hiddenClassName) {
	      var className = this.props.className;
	      if (!this.props.visible) {
	        className += ' ' + this.props.hiddenClassName;
	      }
	      return _react2["default"].createElement('div', _extends({}, this.props, { className: className }));
	    }
	    if (_react2["default"].Children.count(this.props.children) > 1) {
	      return _react2["default"].createElement('div', this.props);
	    }
	    return _react2["default"].Children.only(this.props.children);
	  }
	});

	exports["default"] = LazyRenderBox;
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.getAlignFromPlacement = getAlignFromPlacement;
	exports.getPopupClassNameFromAlign = getPopupClassNameFromAlign;
	function isPointsEq(a1, a2) {
	  return a1[0] === a2[0] && a1[1] === a2[1];
	}

	function getAlignFromPlacement(builtinPlacements, placementStr, align) {
	  var baseAlign = builtinPlacements[placementStr] || {};
	  return _extends({}, baseAlign, align);
	}

	function getPopupClassNameFromAlign(builtinPlacements, prefixCls, align) {
	  var points = align.points;
	  for (var placement in builtinPlacements) {
	    if (builtinPlacements.hasOwnProperty(placement)) {
	      if (isPointsEq(builtinPlacements[placement].points, points)) {
	        return prefixCls + '-placement-' + placement;
	      }
	    }
	  }
	  return '';
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	function calcPoints(marks, dots, step, min, max) {
	  var points = Object.keys(marks).map(parseFloat);
	  if (dots) {
	    for (var i = min; i <= max; i = i + step) {
	      if (points.indexOf(i) >= 0) continue;
	      points.push(i);
	    }
	  }
	  return points;
	}

	var Steps = function Steps(_ref) {
	  var prefixCls = _ref.prefixCls;
	  var marks = _ref.marks;
	  var dots = _ref.dots;
	  var step = _ref.step;
	  var included = _ref.included;
	  var lowerBound = _ref.lowerBound;
	  var upperBound = _ref.upperBound;
	  var max = _ref.max;
	  var min = _ref.min;

	  var range = max - min;
	  var elements = calcPoints(marks, dots, step, min, max).map(function (point) {
	    var _classNames;

	    var offset = (point - min) / range * 100 + '%';
	    var style = { left: offset };

	    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
	    var pointClassName = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-dot', true), _defineProperty(_classNames, prefixCls + '-dot-active', isActived), _classNames));

	    return _react2['default'].createElement('span', { className: pointClassName, style: style, key: point });
	  });

	  return _react2['default'].createElement(
	    'div',
	    { className: prefixCls + '-step' },
	    elements
	  );
	};

	exports['default'] = Steps;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Marks = function Marks(_ref) {
	  var className = _ref.className;
	  var marks = _ref.marks;
	  var included = _ref.included;
	  var upperBound = _ref.upperBound;
	  var lowerBound = _ref.lowerBound;
	  var max = _ref.max;
	  var min = _ref.min;

	  var marksKeys = Object.keys(marks);
	  var marksCount = marksKeys.length;
	  var unit = 100 / (marksCount - 1);
	  var markWidth = unit * 0.9;

	  var range = max - min;
	  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
	    return a - b;
	  }).map(function (point) {
	    var _classNames;

	    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
	    var markClassName = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, className + '-text', true), _defineProperty(_classNames, className + '-text-active', isActived), _classNames));

	    var style = {
	      width: markWidth + '%',
	      marginLeft: -markWidth / 2 + '%'
	    };
	    style.left = (point - min) / range * 100 + '%';

	    var markPoint = marks[point];
	    var markPointIsObject = typeof markPoint === 'object' && !_react2['default'].isValidElement(markPoint);
	    var markLabel = markPointIsObject ? markPoint.label : markPoint;
	    var markStyle = markPointIsObject ? _extends({}, style, markPoint.style) : style;
	    return _react2['default'].createElement(
	      'span',
	      { className: markClassName, style: markStyle, key: point },
	      markLabel
	    );
	  });

	  return _react2['default'].createElement(
	    'div',
	    { className: className },
	    elements
	  );
	};

	exports['default'] = Marks;
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var close_icon = __webpack_require__(70);

	var SearchInput = _react2.default.createClass({
	  displayName: 'SearchInput',

	  getInitialState: function getInitialState() {
	    return {
	      hidePlaceholder: this.props.query ? true : false,
	      query: this.props.query ? this.props.query : ''
	    };
	  },

	  clearSearch: function clearSearch(evt) {
	    evt.target.value = '';
	    this.handleChange(evt);
	  },

	  handleChange: function handleChange(evt) {
	    var hidePlaceholder = true;
	    if (evt.target.value === '') {
	      hidePlaceholder = false;
	    }

	    this.setState({
	      hidePlaceholder: hidePlaceholder,
	      query: evt.target.value
	    });

	    this.props.onChange(evt.target.value);
	  },

	  handleOnFocus: function handleOnFocus(evt) {
	    if (this.props.onFocus) {
	      this.props.onFocus(evt);
	    }
	  },

	  render: function render() {
	    var magifierIcon = __webpack_require__(71);

	    return _react2.default.createElement(
	      'div',
	      { className: 'search-container' },
	      _react2.default.createElement(
	        'div',
	        { className: 'inner' },
	        _react2.default.createElement('img', { src: magifierIcon }),
	        _react2.default.createElement(
	          'div',
	          { className: 'search-input' },
	          this.state.hidePlaceholder ? '' : _react2.default.createElement(
	            'span',
	            { className: 'fake-placeholder' },
	            _react2.default.createElement(
	              'span',
	              { style: { fontWeight: '300' } },
	              'search'
	            ),
	            ' zip, name, city'
	          ),
	          _react2.default.createElement('input', { type: 'text', onChange: this.handleChange, onFocus: this.handleOnFocus, value: this.state.query })
	        ),
	        _react2.default.createElement('img', { src: close_icon, className: 'close-icon', onClick: this.clearSearch })
	      )
	    );
	  }
	});

	exports.default = SearchInput;

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAAXNSR0IArs4c6QAAAJhJREFUKBVj+P//vxAQbwLiDAYCAKjGEIiPALE5WCmQIQbE14G4FpdeoJw1EL8BYmcUNUABnJpxaoKZgE0zQU3YNBOtCU3zA6DGr0CM6ieoIiaYYjRaFcjnBeI3QGyFJoedi+w8IBtngKHoRtYEkyCoGZsmgprxacKlmQmoSREo6Q3EVoyMjHthCtFpoNwroJgpEP8F6nEHAAsN05uMmDp3AAAAAElFTkSuQmCC"

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAStJREFUOBGFkj1qAkEYhp2QwhMopEhtHSSCIIgQ8ARWFjY5QshFcgB7TaUGbDyAAVtREIkSUqRLEwLR8XmTWdGZXWbg4dt9f2Z/czm3rLUG7mEIH/AOA+gkmcxJ6Aom8As9eIBHeIYdjKGQugGGrqzyCm79EFoV3uDF9/7OMXTbunJQTgp4NdhDO9GOE3EEvaOQcUBG76Pv2xcINzD1jZTzV5c9s7TBHjRjS5lLPyRxBpnPf1JQZn5y/n/Ic3VAn6oamE7Aa4BeYis1g6HvrE9V8wNoKuun+oai7xsJGAVGF5owAr0weRWQ9gN5WMKdMWbDDBcbtaEPa9iA7qwFRViA1hZKYTuiULp2ZYb9hHKkEtqUSq7MsF9QD1MRhVLZlRl2FYmn2xTrKsPTAX1RGtQY3BxaAAAAAElFTkSuQmCC"

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_72__;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(74);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./slider.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./slider.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(75)();
	// imports


	// module
	exports.push([module.id, "/* override file for the rc-slider */\n\n.rc-slider {\n  position: relative;\n  height: 4px;\n  width: 100%;\n  border-radius: 6px;\n  background-color: #e9e9e9;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #00C9F0;\n  z-index: 1;\n}\n.rc-slider-handle {\n  position: absolute;\n  margin-left: -13px;\n  margin-top: -10px;\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n  border-radius: 50%;\n  /*border: solid 2px #96dbfa;*/\n  box-shadow: 0px 1px 3px #888888;\n  background-color: #fff;\n  z-index: 2;\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle-active:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n  z-index: 3;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n  z-index: 1;\n}\n.rc-slider-dot {\n  position: absolute;\n  top: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot:first-child {\n  margin-left: -4px;\n}\n.rc-slider-dot:last-child {\n  margin-left: -4px;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle, .rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.rc-slider-disabled .rc-slider-mark-text, .rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important;\n}\n.rc-slider-tooltip-zoom-down-enter, .rc-slider-tooltip-zoom-down-appear {\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  display: block !important;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active, .rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownIn;\n          animation-name: rcSliderTooltipZoomDownIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  -webkit-animation-name: rcSliderTooltipZoomDownOut;\n          animation-name: rcSliderTooltipZoomDownOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter, .rc-slider-tooltip-zoom-down-appear {\n  -webkit-transform: scale(0, 0);\n          transform: scale(0, 0);\n  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n          animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n          animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@-webkit-keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n.rc-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  z-index: 4;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-tooltip-hidden {\n  display: none;\n}\n.rc-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-tooltip-placement-top .rc-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n\n/*# sourceMappingURL=common.css.map*/\n\n.slider {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.slider .rc-slider {\n  display: inline-block;\n  margin-bottom: 2px;\n  -webkit-box-flex: 2;\n  -webkit-flex-grow: 2;\n      -ms-flex-positive: 2;\n          flex-grow: 2;\n}\n\n.slider span {\n  padding-right: 15px;\n  font-size: 12px;\n\n}\n\n.slider .slider-value {\n  padding-left: 15px;\n  padding-right: 0;\n  white-space: nowrap;\n  -webkit-flex-basis: 58px;\n      -ms-flex-preferred-size: 58px;\n          flex-basis: 58px;\n}\n", ""]);

	// exports


/***/ },
/* 75 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAOCAYAAADjXQYbAAAAAXNSR0IArs4c6QAAAOlJREFUGBl1kLsKwjAUhtu0iCh2d3Rx7tDdQdBFFEE6Cr28iZuLOIq0JQURCt2c7erkG3TxDewklab+ESLWS5Zzcr4vJyeRfN/vSX8WYYzFnucNfnGiKMoIwg7C+FMglmWdIAwhbCGY7wLhG9u2z7Is98uyXEOYC0EWCY+U0m6e50eIC9d1NxXIhTAMOxASpKsviNYErSliqwKTJFHTNKU41UbryQtGUVTLsmwP0MD0U7zi9oRBENSLoogBcl3XTcMw7sglggGaAAfccdU0bSYAhyomW6L/xXEcF5HxolgqT/AJDkApiiI+ADuAYMZQPmIsAAAAAElFTkSuQmCC"

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VelocityTransitionGroup = __webpack_require__(72);

	var back_arrow = __webpack_require__(79);
	var connection_dental = __webpack_require__(80);
	var maverist_dental_network = __webpack_require__(81);
	var maximum_care = __webpack_require__(82);
	var stratose = __webpack_require__(83);

	var Back = _react2.default.createClass({
	  displayName: 'Back',

	  propTypes: {
	    onSearch: _react2.default.PropTypes.func,
	    payload: _react2.default.PropTypes.array
	  },

	  getInitialState: function getInitialState() {
	    return {
	      hideBody: false
	    };
	  },

	  hideInsuranceCardExample: function hideInsuranceCardExample(evt) {
	    var _this = this,
	        _arguments = arguments;

	    evt.preventDefault();
	    evt.stopPropagation();

	    this.setState({
	      hideBody: true
	    });

	    setTimeout(function (evt) {
	      return _this.props.hideInsuranceCardExample(_arguments[0]);
	    }, 500);
	  },

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { id: 'sidebar', className: 'back' },
	      _react2.default.createElement(
	        'header',
	        null,
	        _react2.default.createElement(
	          'a',
	          { href: '', onClick: this.hideInsuranceCardExample },
	          _react2.default.createElement('img', { src: back_arrow, style: { paddingRight: '10px' } }),
	          'Back'
	        )
	      ),
	      _react2.default.createElement(
	        VelocityTransitionGroup,
	        {
	          runOnMount: true,
	          enter: { animation: { translateX: [0, '40vh'] }, duration: 500 },
	          leave: { animation: { translateX: ['40vh', 0] }, duration: 500 } },
	        !this.state.hideBody ? _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Look on the back of your card to find your network.'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'wrapper-image' },
	            _react2.default.createElement('img', { src: maximum_care }),
	            _react2.default.createElement('img', { src: connection_dental }),
	            _react2.default.createElement('img', { src: maverist_dental_network })
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'select: ',
	            _react2.default.createElement(
	              'b',
	              null,
	              'Renaissance'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'wrapper-image' },
	            _react2.default.createElement('img', { src: stratose })
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'select: ',
	            _react2.default.createElement(
	              'b',
	              null,
	              'Stratose'
	            )
	          )
	        ) : undefined
	      )
	    );
	  }
	});

	exports.default = Back;

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAOCAYAAADjXQYbAAAAAXNSR0IArs4c6QAAAIFJREFUGBljZMAC/v//zwUUdmVClwNK8ALFdgDxVxQ5oIQgEJ8E4unoEiJAwQtA3IsuIQkUvAHETegSskDBO0BcjiIB4gAFQSAPQwJJUh2XZAxQ5wsg1sWlIAQo+QqIjXEp8AFKvgFiK1wKXICSr4HYEZcCO6gCOUZsKoCS5kBxXQDnTHdvcQljOgAAAABJRU5ErkJggg=="

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAeCAYAAACG0fjXAAAAAXNSR0IArs4c6QAACy1JREFUaAXdmXtwVNUdx/fe3bubkIRnarobhOURIEEERa0VEVqIjtp2FFBKK3WqYivaqrVWRctgp9g3OrbYan3bTjvDOMIgHUbHUlEedkCoSHkkhFeyiQgtSTa7m33c28/vZO/O3d27xah/IHdmc875vc453/M7v/M7J5rH8dXX199tptOX+MvK/rxr167V9efUX2voRsZreJ9DTHeI9lWtIkp/CZ/cAj02NjYGFt2yqOzuH9wdj0QiGcuyTMi2ba2/g3LKW6b1j507d15r03x2ZdyEcU9Gu7tvNvz+Yb5U723SjnX1fGPI0KEveXXvUFvudCxrzqrxsMAen89XoevF6/pJxpzxZGY49RVgkydPnnj8ww8XGX6js6WlpROBn48Kh7soA07h07UeHhX2NO3f7/m0wXKbr1qORKxnBW6saR7NdmOPP+B/w03hdKMNGjTIE4/FPelMJm9oU6ZMSS1fvjxy0YUXxfMYn7ChAEum0hcU2tE0/bFC2unYnjtnrufFF17IG5p42hMrn0hd3tgYWrlypSfgD+QcIU/wYzQUYKlUanCh7t69e9+EljRNs6eQd7q0Z8yY4THxrPfff58Qb3kMn6GGxpg9vb29yuUymUwyY+Z7X7/Gr+UOD6XmmzRp0pATx4+7Rkqf4YuMHz/+QcBbm0wmY6ne3joJFIFAYA+FGkUikTgPS5XZQezwer1lLMAXKd9ALpaOxUamdX2E8NFpNwyjpaenZxblPoL0oayeKmKxWBiZaug7+aWdvHg8PsJjmhcTONYPGDCga+mSJfMjx47d88gjj5SJHEHfXLx4cSsAppqam/9y3333dS5cuHDia+vWvd3V2bXVtsU8BgLiJMZ3iD7ahQ6thpA0IStzTOaXiEavNsrL08issnWl9CF4iZPgrHt1rWPVqlXJmTNnbiaovswqRhhwV28i8W1O068cOnQoURsMPoS/z8vqbecMb6BdrlnW0pMnTw4DmCC0x+FTeD7waJqJnWAqmbS8lnX70Y6O34sudn6K7UEA9g68Z5Gb3dbWdkJ4w4cPv4N0Z4XXMGaZqdSSrs7O8JubNh2ZO2eOxCcFWKK3V0fPYLEs4pq1ZvXq5atfecUPf0GkvV3JjAiFLmWV12D7ess0H9d0/XH6eDIYDMrh9igDlEMwmozHOxjLmGQ0SmTSR0NbzE99OoCNshtFpaYfF1rTvn33Ivc1DL5Gcw31WazKMuGR8LwupXyapvlp3yV1OgRT/3fb29vX04SsvmpWtw65XlpaRtO+J9Ta2tovA/KDVN9lO+3G/hR+y4Q3duzYAJP7DQO3jh49+pYRCNwDuX7dmjXvjAyHd4iMfJzqnlmzZ19/5VVXhefPn78Ue3nB/rrrrvOSoL2A3QwgvcEY3mHhHmMx6hjjNl3Tkn2WPBW+QOAy6ioU0fecLF0VOhMY5iQ4635/4E7V1rSbpKQTCw9QWwXwbpVBOOVNy/o7MrmtRL3GycfAB3w9DLQPQE0rFz6DuldKsc+vj2dZN06cOLGyNxq9hUmKp6gPr95L360IQbao9n1ZvVzbptvl5s2bLwNE8RYVSqhLglvGAt1sy2TL6OHDh2WrIsKnaco7VZ0/4mElk1KC6VFWeCAyY3MKICx1aEO2bNnSYNOlZNCSu5X82KYpYQoqtlAW9EvttqOs6uzsbDA1baaDpqrobymk0e4D2oWhSKY5uQQrLyQxsNyCu8m7BnunYDqdzgOUufYhjxCgjXfKnqouXlEos23btmpo9qGRx8Z+GIWz8og08PJNhTTaRbbzZHR9ZF472wCg/F1wCjv03Ren3IwJzS3lsGUBL89dbXqp0uFYORFi4aBcg0rBglRAEkDzPn8isR7U8minagB+EfCiA33gqXSdfF0zzQ+dBGe9oaFhOhPIm5CT71L//6vsooD9XA7IWAwmkNuuQCKoFPXfcvz4/oHd3b9zMVeShFFXhE81P+d4xLju9fs7SvWSSafuRyF3QS8l1w96EaDYr7L1iVdXEueuwM2e5vcMXrSL0tWL93Z3q5TD1v24Jf2XkzZ95DnqnBKRUp0Rc5iDFi3F/zTo5GKSYqiPI/fF1kjklzzRLJo2bdp3SEv2wcjxs2KqIHe61dnO1rUDBw48feTIkekuvFKkzIYNG9RBVkrASdfJZNucBGddtgRfDrBC93TKfpQ6W67IwziSclcvp/2tW7eGU4nEl9BJFNomdypnbNOd8lmZulfXrv06t4+HCnVoF9nJypzAKYrG5aKvSDqPYxFJCl0F2I6+dLrblQeRyZTkldIppDsXxMkjQRxERD7BkuUAtfmc3DVudPj+7u5uSZWKthgxTCXhtg1HWTKGO2RyVRJczfL7vEWDEgn2o3dIMChJnGtuohvG/pylflRyUR0dJvcfN1UStjrNMNpYyaLcjl1xPrHukIuegCXbQuV7Tj65W7OzbdcZS/8AE0UC/27bgF3yqFiL3/13+/btKQLvezbdLgE6WV1d7ToIW6ZU6XTn7H1RHTxcI5w3hwnEohYA2FZoh7h7Nai8BDBpxuFk1/gDAXmyOOIkSh3Z7YU0aQNk0dzc5GyaOmp9Xt9SpYy6zYjHY89xb/uFtBnUn6TE4wJMwJZ5RYEpjP5+9tUoq0dI+Gu2qhLYUaNG1eAqJ4VG3ysoCrP4oa2trW3wDhD8laqMq6urawHxSwuFQn9TRMcf7qHbkN8JaUCWrOYBkM84xFyrctsZHgrdz513ngKM55vXKiortmTS6Srub9P4Z8iPMX6Yq5Fa3bq6ut/S3sA2uJAVGYfVg6zknWKdU+5cRy9B5GpzbdMMjxgxQq5Pqh90K+n8c8iohyvsDcRLqyorK5dCe4/9OYfJnpdMJH5Uo2l/FDucmEdA7VkAMeDNBqAVGFslvJqamudvuOEGdSht3LjR95OHH5aL97EFCxb8E1sBkeHzjq6uljHLVeB2+rGwM56+x4DYowD/HnZGc59VY0ImwGvHEMT9ooNMIBqNDmfskiNW2d4iPA+J6vczqdR0js6X9+zZY6+64i1btkx/6qmnLgagKsvr3UhH6jWAzm9ildSqMZhWtksXAbtelEyvVw6Fo9AnSltLpy0jnX49WVZ2ubTl413qZbnsTp061ejo6FDpwODBg9/evXu3/Xqg5AD+q9w6ZmPreUDcoYj8aWpqegDvuS3W01NZN27ciXA4fE19bW3K2Qc6/5KXDtGB/3nsXMaYW8TrhCaLRHua1OXjUHkV9K7ua3k8MuZv3XFHMxiYeYDZAp+1kpUXD/YDTC51AJjBLN5QgIjxwtFBKlKLXAW/eHl5eW9FRYU66NjGVbwnnI1+OTyNHbDp4MGDZ2OrHf1yckFfc3Nz7mA4IwBzW+DhweCdbKNfscVSoLmSp6dJyF3BhNdD91KOYas/wNa9C6AuhiegW7zqLuGE+BmNW4nZo9m649ra2+fafYjQmfn13VD+zbH7TUC7CYAscqhfc5OQrdYDSGMA6wvwMgMqKvpCiq6fr3u9w+DLi+t5eJkJqHkpyhkLGBNW1x1SlQjgCAgevOyHtaHQbsDrBYxmwLqRepo3fKoqniapTAWktTSnCI12Xg565gLWl/5Y3EbkNeQYIGQAaUUwFJqMZ/kB4iXKangZHipV/kfMkv9xXACICynPZTv6qTtzQ/cnD0H2s/7hCTLRCbxD/wGw5MQHA2se7/fPUS8DvL3Q34WWJo2wATsHXg/0eZQV6Mrj4jWcom9Rqq/ozmUzPusl/2FaR3pwgHmc5Daxc+TIkQ3kCyFT1ztIZdIA1QF/i88wBvJMHiNlaiQrb2KvXoX8DkBqNHy+OF73rI9Uycbjf4eNrzHJqSKxAAAAAElFTkSuQmCC"

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAAnCAYAAADXa8wEAAAAAXNSR0IArs4c6QAAGS1JREFUeAHtWwdYFUfXPnupShErdkGxd7Fg771Go7H3GkuMGvWPmqBijSUSS2KMRhN7jS120SRibFEsqCBFwRIBFUVB5e7/vnO9/HAFwZL4fc/zz/Mse3d3dmZ2zpxz3vOeQeQ9lxUrVuR+z0P4r+7e8L5Gr+u6/coff9x9+MDB4+9rDP/f7xvMAASnLVywsP/18PCrFcuV04u6FzZO9/Hp8QZN/f8r72MGhgwcuDg6OtrYvUsXvUghNwpQr1+7TsLs6bNrvo/x/Lf3+a+a0EH9+w8cOnxEz1uRNzX/Y/5q7oxGoxisrGwvBp5f/t8+me9j/Nq/1Wnvbj0G9Ojdc8aePXuzDxsxXBrUqSuOjo5Sp15duXTxklhZGfS6DRo0nDBhwuE3HZOHh4ddFqPR/pmm2SXCxyaK2CcmomV7Q7zBYIi3traOt7W1TWjdunW8t7e38U37+U96718RoM/kyR9U9fL6wc3dPWuRIkUEflCKF/GQChUrSp26dcT36wUyYNAgCQoKunHi1Mnyz+Li8hsTtfyJBmN+MUouTdNziK7l0DU9u4iWAxOYBYcdDnvToduJrq4z/D2apj3DOwl4P9506Am6psVpokejjyidZ12LMmh6FO5Him4VIdYSUbFixVsbN27E2vjPKNb/9DAgLC/0sQxHVnNf1DgWms/Y2Idib28v+fPnh0Y6FHj06GHMqRMnTVVf6AjkjYI/5rPp6Vv9xbhs0AAPx6SG0JHq4sVfdmjkDTWA5yLPRM6cOJnoUcjttmjaNTwOEk0P0nRDkLW1djWzi8uV06dPo9a/V/5RAWKSukJIy2G+qC1JZfPGjUm/Q0OuKTOakJCgNPLx48dyIeC8xMfHC96TrNmySfbs2U1HjuySLZvpd+bMmQXm0HTY2Yqdnd3/XZvv29qhDU2ePXsmbP/p06fyNAEHz+ow3UtQ9xPk3r37Eh0dJdFR0RITE5P0m2NJVqwg03wQaj7cq0NZQ8zylPKNjnnq4eYeiBsBuH1O06xOZ3bOfDIgICAu2fvv9Oc7FaCnp6dNbExMdQiuXq8+fdpjpOUghJfMmpW1lfqIps2aid/hw9K0eXO5FnxNNq5fL6vWrJZKnpWlRMkSkjdvXiz0l15/pxOQkca4qGKiTQK9e/euRNy4Idev35Ab16+r4zrOXBD4blu0V/7F0UPXn0vcg1hq7DmYZX+DZvjdaK0dDA4OvpuRfjNS561np6S7e6GnIm00ozRBh/VghByLFy8u23fvAjAxCcpyIFcuX5aWzZrLqDFjZN6cOdJ/4EBMQIIEXb0qheEjx3/+ufyydas0bNxYcubMafn6G11funRJSpUq9UbvpvdSYmKihIeFSXBQMPz4VbkceFkCAs5JZERkaq/CpcpZEcM++Pbd3Xr1+v1tAFXqM5xat8nulXAr4ZbVxXFgVpes84H2voLJaI7HxXDY0uxt3LpFXFxckr2R8qezk7Ps3r1b1QkLDZWLFy9Ki5YtpW///nLxwgWYQ3toYEmZPnUqzKKdFPEokrKBN7jy9fWVBg0aSFRUlLRo2kyy58ghXGgsERER0rhhQ7lz+w5AVd3Xbt1s6ot4eEjVatXUt/Tp21d69Ool1WtUl4KFCqk270bdFQibSpMHhrcWXGufgHPnBmd3cSmcM3v2J8M/+STcz88P1jfjJcMaqMzjvXttdKM+CKaiEbpIetfZ2Vnq1q+HCWoojZs2UaDkVUNY8/Nq8V2wQHJgEh0cHIQaOWTYUHFydJJimNSjR/ykaNFiYp/JXr7/7juZ4uOjBPqqNtN7NmnSJJmKBUHg1OGD9mKE1qzdsF4yZcokfXv1lgtYRPsPHlD+cv3atdK9Z8+XFuGDBw/kj99/l1q1aytfGhf3SKytbSRT5kzif+yY1KtfXyHsW7duSb58+eTggQPSFIvFFj6ahX747F9/yRG/I3IIz2BKUw5bkzAg32W2me2XBwYG3kr5MPWrdH0gBJf5QdS9wfejosegCawcU3FydpKWLVtJqzZtpHKVyviQ1JuCsFP4sUePHolHUQ+Jgi/p1bs3zE4QPtooZ06dlo4fdZKtmzer0CIbgMvBAwelWLHiScIjGLGxIXA0FWovQhPzZYbO1BZrG2spUqK4rFm9WsqXLy+58+SRG5GRQl/Xs3t3ZfrDwsOVf4uNjZWCBQtJwNmzeM9GCcHB0UGt3tvQWM9KlSQIgqAZzZZtgVog9+7dk0q4f/ToUTkJRD3FZ6oaG4FWNS8vdYwdPw5+9Lrs/fVX2bJ5i3IfsGRu0EyfZ4/jvT0Kua+1Msi0K6GhV171YWkyMR07drTycCs88n50TChQ1lw0ooRXuUoV8V20UI6fPCk+M6aLV3WvNIXHAT5/DniWrFw4f0GhTYYOXI1X4fcyZ3aQtu3aIR78WqpUqyobAGbuxdyDD4mQsuXKJb295uefZdOGjXITk81yAKv4FMbxOoUa+OTxE2kGALURbS1AnzStRqMptPvkk5Hi5uauBDEFGhsHoVLTRn32mTx58li69+ghNI95oWHtP+wgHTp+qLSuV5/e4lm5svz999/SuEljGf3ZGCmGRTJy1KdpDq9gwYIq/v11317ZvmuXdO3eTVkv4AhrHD2eG/VLHm5uqxE7F0irkVQFWMzdvepfJ0+egmbMx+hy8WUOavO2rbJu4wZl47maXlUuwJc9f/Y8hcaw/vPnzxTcb9m6lRJg2bJl5fbtWwAvhZU5+nH5CunUuYvYwyx5QrMfY9JYaH42rN8gB/bvVyED77Vs1Up69+gp38AcWy4UPk+tUKPuYpKvh19XlsMGIQd9051bt+WvM2fkf8aNU+MKvooQD2jDAeFKjhw5YTZrYXIziQZQTTN6HyHHrZs3pTzICANUxQamNDQ0RGrWqiW7IAzEg3ITIGbXjp2pDeOle6VKl1Ku4jf/Y0rojk5OrGOAAeuqPTdCkIU/pVJZvvjSjaJubiMQvG5AxbysXLJUSVnwzTcyaMgQyZ07Y6k7+oCTf/4ptcGyWJY8CA2ITrn6ln3/vbRo1Vr2790rNWvWUvFgCOLCEIQUDx8+lMqVq8ifx/+UBg0bQPM2IMzYIIu++1b5DvqRsLAwqVK1qooXGasVegEWLPvk9WGEK9S08wEBkjNXriStqYb3b0IQbWABsmbNqgBH3KM4yZM3j0LEnp6V5cNOHdW3ewGQ0Gz3wKJxze0qhWBaCXoqeXrCHIZL5y5dhf6TaPeTkSPVomO8WqFChdSGlOo9+mQCIboTuhuCOmgjnKje9FbkrRr5CxbYCS1PEZgmNQR1XcwMgfmYNnWqjvgGbizjBX5E79u7t85z8gIN0nft3Jn8lt69S1d90IABetuWrfTlPyzXz509q0+aMEFfsmix/kGbtvrsmbN0mEv9/v37+qWLF5m10G/fvq1jgah3YQ51CE7/fNx4dbBeWmXixInqEXyVPnTIEL1Duw/04UOH6TOmTddh6tN67ZX34+Li9HYY57E//nhlvbd5+NvRo3qVSp5JMkFMGZzcpCaZ0KLu7vhCGWKW5szZs+XziRNfMoHm52md/75zR2rVqq3QXfI6F86fVygt+T1q9+GDh2T8xAkScO4s0Jmf1K1XTxjoN2/RAv6muxw/fhwm0lf2wNlv3bFdmU8G1R8PGwYftkFdfzHZWz6fNFGyZCFF+upCEBMOgMIw5bNxY6V0mTLSvWtX5bte/ebLT6ldBGBxcSYz/3KNt79DxLsN350vP4kf6KFIEUk07kQIZLKxvFnUrWgFLOYp/M0yGg6bZsNciM6IrNIrRGJH/Y5KNyC55IXo0QmhBj/YXLZu2SJFixWDuagqa376WRBTwmTEqXtEnkSqPgARjCdpRigwAh/vSV8o1mPHL79ImTJlJfBSoBIiUlUy96uvBFpo7iLVM8fogCxILtdcUqBAAWndprWUA1Dau2ePHD50SJo0bCS9uvdQ/paIdMyoUXLizxPyw7JlUtOrugJOI0eMkLpYpMf9/cXVNXcKlJ1qp295k4zUSgA4hlyq6Ho5Y/zTafytNNAoz77AbxXXEZYPGDRQ1eMfOn3Cbfqk9MohaFPzls2T4h5z/Z3btysu03zNM/1pM7AxvYHoYCakfIXykhkDXAhtq1KVvu84IPYeZQHm+y5Q3Gj/Pn2kd5/eADL7xNHJUdatXaN8UUx0NBz/KIHplY7tOyCOPJq8q5d+W9JzBCkwczJuzGdqkRCM/LRqlfJBjohNvb/8UtF6jLDjHj4C6e4khdzc5MzpMy+1/U/dcEN/AwcPTmpe12RgabfSuZUAoZf1zE+at2ieIiyIgyPtgaCWoIMTbUHsml+DGYmDCXOWHBbUVzSYjxIlSyFGypZUF+yDQnSMJQnZaap3Aq3dAfixg5bBpyhtdHV1ldOID88A0Y35dJR0hqk7ibChNnKJnwEtfgS0um7NGqXdDG/OXjgv+w8dVHFkUmcWP4hWGUZgV4AS2uXAQGW6G4KJ4QKaOn2aTJ85CxReDgWiaMJoQUjx0QIwfLh2LRjad0zFfsieyJ07ty16+WcuW7dtk9QwFpxdvMR7GapXr54Jd5NSPXnyKPCZVJFxDVEj4ycqaWr8Jlcv/VdJCMqyOMMv0dclL6t+XIkVbKKXHj+OUyiQK5oQ3RxehGCSSpUuLSt++EH5RRIFzUB6s69qXtUU70j4vnP7Dpn8xZcKXTJBnF6hmUxMfI4k8kUZ/emnstD3G/n6G1/4mPwyZOjHAuCm+qSf5UL7FZQfF20CDn77gvnzEIfeFBDTCMA3q3Bi86ZN6XX7Tp5bRgGaZsxn7e/v/wTIJhLmQXlJM73DiWKmwKNoUaWRIddCVGomORNiHhX9TkUwD9Qoy2JZn+1wJVMjHyIXCGQq5cCG7N65S63yQJDO27f9oqgsahdhOimpCV9MUua8YaPGKhbcgkljaNMVQIeTCdQKjewsU6b5pLrIzONqAE0rXLiw+i4CmkdwDXQTzIbwfR5pFVJt6ZVIkAxrV6+RESM/UfFuevVf53nItWspq+t6sMmEirbN/GT7tm3KZBA4MC9GR8/CawaploUTQB4wD+iojJRvFy+WgUNMtvzmzUgEzWcVEi1fsYJaKKEhIcpZGxBEW0HrGjRqKKtX/QTuMUH5NycEuArIwKyR/adpr+RZSb27ft06Gdivn6LE0hrLDaSC+vXpKwP69VdgCHyFtAMd+PX8+Wm98lr37yGPuHnzJrA2T17rvYxUpuUyFw27BuwcHP5QgXzO3K5n9eeJnFXbCYDj5RF4PoHJqFGzhqpPP0ZUaJsK+xKPiS0DNiUjhewMaSlqAU3yyhUrpEmzpkIaytk5i2wD08O8Wt68+RS1RcGQgcmVyxUc6RZkK/px24UwVKE5IzJ+AO0niXz0yBEwLHclPCxc/W6EVFQSasPgzIE8g3Xm9Ohn6Qc7d+msFiB9Ki3Dyh9/lHhMPgVAt8AF8wjAhWaUfp7+M/ZhrCIPyArp+A5mNrjwSB0+hDbvATHhBc6T4QrHyTbetpC4mDVjhnIhbEvTDBOvBF09qgSID3mYLVvW8+PGj++MRKzGCsnTQSr7nYrwWC89So11WDgBs2fOVICFKJAr9dbt2yreI0jIinCBYQTpLMZmRHhjxo6V09CQhtBCktw00czCkx05AaaHVF3RYkVl8cJFMn3WLMXKJMQnoI2/YJp3SR2AHTN4MguQfR8/7i/tO3wov4MSI7qmVrLuAIQif/ofl9WA7If2H5QdQM8RNyJUOEMfOA7h1ZUrl2X2jJly4sQJ9U1z586FSS6iMhob1q3HvSdyAxzukcN+KjdIF5B8Lk2z8Xp/udiwHVNZRr4J7dsUFBYyevLkyaYwgjeDQ0N33IyImEIGhdfvuhw6eFBxfWYIHw4uslOnj+QEqDL6P8Zmvfv2kfWbNiK+KyPnzweoXWukk37dtVt8Fy+SLZs2g4dtpVY8QQj9LgVAEw42R0327LlzxP/kCcSNQ2UefqdGdnO7BDnZuQAku9E2E8nWIA9iYx/Ip6NHyxKksAYOGSTNW7WUr+bNkXbtP0CC9ryKosNB3zVu2lRiH8TK2PHjQeZXVzGkO1DqxC+/kKHDh0vs/QfgWsNVRuJV9F56c0wrtQg0JvleKgAL5m9Hzry5e+Ks5PTCB5qa8vbx8V66ZEkvkLQpUwimx2/8l8Fz7dp1YCadk9ooV76cihezZs8GUxMGNOirntHkkMResXKl2q3Gif35p5+UphNYDfv4Y2QzKmAbRjMgwHtJgTtN7VfQwjo1agr9bKNGjWTRkiXi5uau4L65Y4YR3DT1/XdL1QKZ9zX4epC/GgBNgQIFldYx7uXCofDXgdscA81j2mvN+nVI/kZK127dhCT4Ugj63NlzCJNKqAzJKVgLcrdcpARDy5cvl2VLvzd3/Vrn47AEbUHWz58770UEgEyhQZvevXevdgSe5saUuTRfmM8+Pj4FvKpVOwhf5YHBpFrHXDe9M7Pd3HGWViEDchLmiIG4OQygnzsCBMwsfQI2IYWFhSo/8tPKVbIP/qUrGBIugEmfT5DBEOiSRYtUH/kBuJiiom+kP2N6ZuCgwYhNcyh/RG0g8uX2Ci4GpsJYOMZcLwhummaGPtz+yLQW/StRK8kC5ijZP/0rNX/O7K8wxhZKC2lhyFiRouOUMYvx5Ek8drUZBftV0/r8l+7TmjCJnYKM0LTzYmUYfO3atWOWL7xSOIt8F/WsVr3aHM/Knm+0MYWTREjdFECFjt6y0Czs+GU72JTcKYJv+iSaj6VLvlUbnjDbKlPB97mrjPwoQdXgAQPk6pWrirnhTm/66tZAlIwfKZRDgP08k9obMnSoyjZYjoHXBDXMApgXkGUdCmbP7l/lgw7tlXAsn7/tNcMwxrPr161V1KC5PQgnUjdoMwsUKvStn59fqlbxlQI0N7Rs6bK+IE+neNXwyouAOkPv3AFSZBD+YadOaa5AojiuamavkxeawwP79iu6jCaISLUKmJZriCFnTZ8u7tAICqo+0kxEn1O8J4ubm5sK5s3tMLnapVtXKQ1hclWfATgiEcCDmkO/Rs1gsE4fjO39ys+sAgp1L+wOCs8Wi8OUDM+dJzc0vIDS6MOHDkMj3VXgz9QSM+zcZ8PtjgRjTH2RZG/cpMkrwQuFxjibFsgPbfLdpKJpQQAq88XasBxxeULS/VR+ZEgY5vfmzZtXuYi7+ywkMWvDHNmY76d2JgwnQiVSNO8JSV4v6m6ULF36nYzGzjRLJEv/Q7PKiSfhTSR3+VKgQp6bgUa5UYhmmRn1vv36KnNGMFQf4ckcZFGSF2fQe23btkN+7SMpjgw5fSz2biZVWQ6BRUZGKBMbdBWmG6EDke1jhAuRETdQzzRF3PNDWm3alKnqXZpGEggMI+g/TYV1TRhw284dCoy9eKAEdB5AiBwvF93pU6fMvk1VgdnF5j7ZquuG74LDgv1wnSEwmfpGFnOvFudRo0adwq2G3t7ehryurv0KFCw4qHTZsuUR7Kdoh+ZvG7cFAkjQt1gWghpmEVwR31kKj3UpQMZwBBVEeeREeb0Yvo7bGQjzEfKo+Iw72X7Zuk22wxSvAGggXzgWMR2yK8i6JKoJTkw0Kl/EVU4BfjllsmJerEDF8X8zOKlEtIkY9zBkGsi90redxT4Y+l2m1vg9HTp0UPEfEWjDxo3kGWJWUm20EssBuk6fOqlM+v59+yRXzlww4Qeh4QHKL1NglsE9hETt2os1simLpm0/HRLygN9PH5rRkvGaabQIP6ctmDfvw4Jubr2glV7wP9mA3jSaFG4TsCz0i4zTuFUwrfwdzS/3hXbD/pPkwThzgtwFNgO71GYj/iKJTKDDQuGsBXpk7pD7VLi39N8oBDMM4qm9DEeCgoPkCvaFIvGcevc0j7rsw5b8/VZ2doeuXLmSfpon9ZbU3bcWoGXbI0eOdClZvHifXK6uzbG1rjxMYA4EsmYbI+RCCRpISKdVVmE198SeShYyM4z5yJDMQr6PftPRwRHa8RdMaU2wQGXUSq9dxxSmEGUuBDnN7MGreM20+jbfZ7jBjVVqqz0QqHln9t9ge0w7s6+rczr5x0QoUwACgGNipfnb6PrvgaGh4eY+3sX5nQvQclDU0K/nzKmfPWfOFllcXLzCwsJKlytbzhGmy5pkcmqFJpjPuA+Te2Eo9NowdYEQJANtattqJIFZj0CFk9ijazcIvSeuEaNh+x9pLLIqzDxwEZgPhiXm36bzi/+PAHDiRiXz/0aw79cpMHvQJP0CHNc5gxjOGa20AFiPc//k/0VwfP+4ANOaBPjRbPCj9RFz1XBwcCrt4ORQyCVLlpwIN5zg82zgX7SxADjNYSIJFsgnugINXr18BWFJM+XffjvymzyIvS8dgXTJs/aE8KpWrSa+Cxcq4LRzxw4ZOXxEWkN43fvYUq3dgumLwLQB3Wgh6j+TRIKs7e2DMroR93U7Ta/+exNgegPzHuud91F8TBUrG5uSufPnd85kmymfra2Vq7NLVpfr4WG5EXpoMM22GzduckIGP5Hb2h/HxRnA9lhBew1AAkgXWmn79+19vuKH5bHRMTFkLwga4vHR5KV4qGv1G/8rqP4/UDP9XyCEE2UwatFiJXfheG9iA/Dt/6T/C8SYVflfKJbS+sMdVTYAAAAASUVORK5CYII="

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAAqCAYAAADCgRdOAAAAAXNSR0IArs4c6QAADetJREFUaAXtmguYjmUax5/vmzGDyTGn+YxDDqOisYpdF3YjSZck25WNaluFdNilqFbWGqkkFSJbiWh1WRLaFUXJIGQ3WqSQw2AORgxG05y/b3//1/uad74xfGPmmq0r93X957mf+7mfw30/93P4nnc8xpihwE1vkclzC2z+VlKfS74MPsWVv8S6PPA6fMDGblKPq8zNzrZ1pPutu+ASX9QD4WSzXaJY+P7gHy6Z2CvA3S5ZjosPZh9CUBfkgsl2SmJqgSGgsjLQZrDS4oxpQ3q7zaeR/h30Aq1tmSb+KHgY1LFlC0kVBG7qTqazLfiSVKupPVBbovfA1xZX+GcwrFbgCTAdRIDHQCRQAL0GjgE33UmmlS34mFS2yuZMsB6YqUCV/XaaSOoYDmuRBuNEs9KvzojP+XeBrRs8eClfBY7b5U9KYFNfUrW7CTh9y0GSbQQOyWhnHKoTTJpEp1zBIaoCJMsHXhBMcqrK410FcpRk8snVLrnDroBRufALcA3oAP4MFKhnnfohvGPwUyqw6XpSVc4CS2y+JKc2p1yDL7D1nOgje5ZuhJOOZrcLkKMzwGHQADjUFUb9WjNvC6fZMsl3AcsAu0x9awWpTFA0iZyIU5/nokEIpT/GVbjKlkm+3CUXq/E7fShtK6Gb3DOn8J9gF8qp9YDKp9iyV0gTbb6kRPXU0VBb4RlSdx8SfwI0o5XAYvAvEAb6gCMgFPoSpVbgIZfyS/BauttcsrKy6kdbRw+7IY1T/tAy/9aWFUuCDX4VjYOgGhgP7gftwHfAcTjsOakx0nvBXDAL/Bto6dwDgullBPOBJq4F0CTIgFBJk3UaxIOa4Aag7WAhUL/lRaNoSEGi8cqhGmcboAksMQCCnarl8xcgGgxesDhjxpFqiZ6PFH0agAwWTTqTWHUVlcGU5hLc7OJDYY+i9CK4HIwDih6NXU4oT9pCY5r8a8BI8DRIBeq7RAp2qhTViKJGM1MbaO+aCc5H0RQOAqqzFRwDTh3dHDRBbrqbjE7YD4F0nTxsyKRDSQYOB3FA+20iCKY8BNlAtlYJLiR/mS0rKWi012rCFGB1gPJa/iXSuZyqaHOfzE+Qzy+xhTMF0okAjwIZKQwDE4BIA3EMuhb+TbAd9AP9gQ42zf4NIFSSYVr+Ik3McxZX/I9O8K+BBzwM3DbXJq8JFZV0+CZSNkMKkMY8V8yFaCoKcqQi1E0fkVntFsArOqTrHkB98jJwKQgmGSJdZ6Lqwh8EJ0BT4NBoGOlo725kC7uSSrbeziuZBiTrrAyklSGH/VEZm7RCpHOnIyDVZOUCp4+t8DtdMo3d7exVtq62F5GcrzHfqIxN60jVXltH4KQa1O9BBlCIywAdAKIdQI07G3J1eEWVdE+CT22+H+kp8Bn4AgRTTQQHgAaoQy8F/Ae8BxRFIq0EDXAXuBJsAp3AcaD+pa+Jaw/2Ae2pcqbqqM9lQG1Fgq5AE5lopyRW/3NIk0AykI0ak2x4GmhpO2PRiosDcrrGeghkgQ0gAYgUSK3Bf8G3IBGcJUVSmcnn860ygcCvytzQT7ABj9c7LDk5+W330MPdmYvlmZkoQkaRXIwiIxU8hZSfn28KCgoKBSFwYWFhparj9XpNpUqVirUcCARMbq52gdAoeOxOrby8POP3nwlsj9+vyC5C7n2kSEFZMr6GDc0bM2eaHV99ZfYfOFAE48aNK1XTQ4cONZs2bTKVqzjn3IWr9x8wwOzdt8/s2r27CHbv2WO2bd9uhgwZcsFGYmNjrXEHt6H84MGDz1u/XCLV3UO9evXMyo8+MqcyMsy8efPMyRPa3wvpKxwdKtWvX9+MGDnSREVFmUeHDzcTJ04MtapZsmSJGT5sWDH9OnXqmFmzZxs5eN3atcXK3YLExETTuZO29tJRuTt15OOPm3QceXPPniYrS/v7xdPY+Hhz5MgRM+ett0w8Eb5o0SKzjwgsCx07dsy8w2TLWRdyqvrRCmkUE1OkS43p9Gmddeemcl/+7du3N0uJkrI6tBNG9+3b14wZM8bMnTvXKMKfffbZc1tRCqn22x433WS+2aWLxoWpbVycWfXxx0VwY48e561Y7pGanp5u6rFsy0Lh4eFmwvPPm2XLlpn7Bg4006dPN1WrVrW2gd69e5sPPvgg5OaXr1hhwnCkQxrbmjVrzPtLdTW9MG3evNlc0bTphRVdGuXu1OXLl5uxY8ealStXmrUJCa6uQmd1kDTksJND27RpY5baDuh1yy3WNrB69eqQV8KoUaOsn1Kdu3Qxo0ePtvbmxYsXhz6Yi9Asd6fOnTPHdOzY0cyfP9+kpKSYkyf1O6GQ5KC/zZhRKAjiGjRoYB4bMcJMnjzZHODmIDi0bt06s/6zz8wIyp977jlHfN50B6e9aDup9sIXJ00yBVyHQonU2rVrm/HjxxdrXwGzYcOGYnJHoF9UZabq1aoNopFGTkNantu3bTPZ2dnWvVBbgoOvd+40O0FJ1LJlS+sw0uHk3AUd3ZycHLN161YTERFhOcmRB6e6ix5OSjIHOb3dtOubb8znLOcmTZqYvXv3nvfOqrv0qVOnrFuMbjJu7N+/3xxNS7Oa5o6+LOP777e6+0FWdmro823gYl36u0fZu/6/t8Bu/UBSaqoeiM5S+Sx/jyfBEwg4bwRnG/85MH6Pp3B/+jkYfMnGSx645IFLHrjkgZ++B8rlShWKGxo3blyLt9RR6MZ6PJ5VPOy+pnoxPt8o3mK7dOrc+TYeTAqsfCDQ03g8fh6+Vyenpk5oGB39NqqNpR/weFZw0+jVslWrHtw16wf8/nnoPkh7e3gsn8VP3Cncb3PAkxhXk0fkBVx4G3Llu131RVyDxh5OTV2P/n1kb6O9tPCIiIm8waZkZWZ+ZLze0bS3ifIXeMtdfvjw4XVWxRD/0H7FEA79J0ZW40HjFQzswc/Qti1atIjkqXck+Wa8mfbUSHCwPqdswFFj4IehF4sjfwle94SFDadsIfKu3333ncZehbrdcP6C1q1bR9B+B/qJxtFrmbhvUJiFc+/ASXLUy7TRRm1ERkVti4mOHkK9x9F7Bezn4TkhPC3tMrVN/fnNmjWrQXkc7deln1JR+dxTL9Bl8+bN62VnZbUnGrspGlFPUBUc9jscsQOD3w0UFChqVkiOQ/WdnSJTpXLlyif14kXmKYzN9AYC7zofk86oelJxxNGT6ekTqYffqBsIHEpKSppK+yPR0a8dyXdRPx+59bvVFx19O1E8jYhcQ/ka8g9mVqt2HXVpxrM2Jzv7dbV/MVQhkcrPSz0+hn3++efW81VMTIyWI6sucD/ySAzpiCV9cMLllhGBQD6yWzF6HO+n+shn4MdX4n8LwiMjF1o6hX8C/GwdiGPvor0W4DSI5iGmEsaFMxkP8C1Gk1SUPB69nltbynU+X1X4ujjdeqioWauWvs7qI2MXUGqqEKcSHVk46Wl/fv56ftLO8RcUfIEDu2NwNzAHh36KI7bj5bssC7zeT5ANx8hhTZs2rSwZ/MjcQGBKXk7OgGAreaE/4g0L0wRFEWU7afOLE+npG3B0K8lMWFixl230XqDN+xnP3NRAYB39vV/f67U+S/A28T3t3YVOZHBfoeTpv+KoUaNGbQL5+S2rejzrs8PDeSzyN3KWI06OYb+NBH4Om0xFaBOf79pKVavu5WGmCaO0PlJRdpTHjrqHDh36gseXCLaGq1jC+lRsWAFxNWrU2C+nNIqO/nUgLKwuH+8+U1vav9260kdWl7Z/7fX70w6lpGzg+5l39uzZ13Ew6ZO4aerzXclg0uir6DchFZ6HKtSpGnR8fLz2N4KokOxorMwhk2NFNUVxcXFRGRkZrHg+01avnvfDDz+EtWvXLtO6IcTEaK/133PPPXl8FTjnV1zVGzhwYAblEZosXpb0vwlWu0yKR45XHsdWx/HZ5HPFMylZW7ZsydMkQJUcPemGShXmVCIxli3gbbyZxx7YhyV79qGVq0s8A9H/VsnQ4yzFe7kGPY/utcgzkW1Edj31l3PFeogr1mQOt+O0805udvanlEVrL0VvFxPWAb1UeBPp8XTL4brFMn8KnSv5Qrpvz+7dSfB7eOv9TTOfr3F2IHCAOm8np6Tcz3VunJ//X+BBu/dGHkzpe35SSso0tVUaqpA9VQPi1L4aJ6VhcJEodQaL8A0Mi8GQWai8Zck9nqeqREV1jKxSRQeHjvB7uQr91qnDA/ZBnNycNhM4yB4J83gmw29WHWFfcvJh6eK0kxg6mHttH/iz+yQO/wP5Raj01cpoERv7LHwdHLqSNPNwcvJ00lJThTmVJ7IOjK4Hhk/Jz83thePw3znI6/2QgqtUQvoMy34d0Wg98+OAkbQzk6KzD+LBLTA5HVRHYI+tbZVzDUM+gIh9hHSeZFb/fv9AJmMKmU3Hjx/vl5CQkM8MzKGsO46ZRX+ol54qxKmxPl8dDBrEILsXBAJTGemtwQPm5A9nb63J4fUnzLC+VaD3OEu8XY1atUbINIxdQ703kd9RkqmUb1Idgf053dbTtWwj9VpQrig0HJrXk2/GTWQBjuzE+O7ji0A0nYwl/wR34Un6FWjXL1VSIU5t27nzCaJuCwN+mdEdBE2tXyz2UDH0NIb0z83J2YpePaJnIEXH4V/Oy83dxz9kzMOhafxkzOfEH4v+aiZBe6hFbAtyXjbtZ5NerToCfTRGL4PyDNp/A2NnUP4DOIYTe9PPhKpRUW0p0z22SX5e3mRkr7LfvkR+YUFe3l9Jf9zUr1+/cvkm9uO20pj/AYLrlXb4l6wbAAAAAElFTkSuQmCC"

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAATCAYAAABmxagtAAAAAXNSR0IArs4c6QAACzpJREFUWAntWAtslMcR3t3/7mxcPwATwsPY9/CZh2OKSpMCrRpTSEgaQijI4VFCEkqhD0QjRNVKSVvaVK0iUKqmaqIWJcUEUEpoUgSlJQmtSUrcPHgZbPy48/02BmEwDxPb+Hz/v9tv/vN/9/vABBykpFJX99/uzszOzuzMzs4uZwMsAW/gPs7lPTRcKfFOWA//dYCsPtGwoNe7WjHmJSZuTXvpRDh8/BMx/JQHuwY8v5JfVkqtscZzSXw+FYPAGAuVYlNJjphp7kf1P20QQYr8v3x2VuCaBikrK9NKS0sHvns+O/rdckloXWh9boYx0a9bt+6aa018EGn42LFjR1Gb0x8VAhjdPU8AMhdAL4jcnPEO9KtRb8rOHfLiwYMHY8R46+bN9yupHgHNAhrLOd/FBf8DtUfL/H0VekX3eJ+vIKbYcxZesaaGpsjqQp9vDsY8xhQPAt4qBNs/WhWsJ3qis84lJRczrkqYYtmK8YtoN3MmPshk2S8c0Y9cIjoqEwOB4VeUuktKtQEajY1D+S+Fxt9TUnSE9FBFHJb8DwQC07ghH1NMDZOSbxJCzoTwwyD/a6FIZEeSsm9rnN9fZJjqh4qrmZBrDLAa1uUS1uUo6ucbGhtfBQ9Ez2Qp9Zamt7DmdUzJh4EoAAbq8JDgbEv20KHP0Fra1FiX5UqyAk3jFZZBxvp8Ew3F3oZiOTZRao0J3wjpkVk00UmlX0nF230tzZNXX19/CkqUxExZRXBMUq04PwD+K2y6RC34ylBj48ag11+OhXokAU9tcN7OmFiI5OEfhAr6/Q9IU+5OJaM+56w2pOvjbRx5dYve/KRS8meEloyvwvI0u4U7Q7LYRjhJFoTc3t7Rsbytre0jexzVhV7vLAzZRQ7qhDvbmO8FzPc9Gzbe7w/2SLUD+k60YX1rftCV7imrq6uLEByJyUoIPRxrXOkqLi72RDs69wDeawz+luDqTewiCllefN+AcS8zl/YttOMFi4NFToeQaQQAox54gWWkVE8hPHATIFyxRct4G3kotYXgP22IRP6IMSTUARzOSwgOhsfAn4QdjG+KNQ+chTP5crG3uKRarz6jpDSwiJfAPAs0VgjBmE7FGTyPXwbMKhjLiwKBWaZUhwBfyoVye7jnXUMYbmYy+KFaypkr15Tm2cFZWaV5mXnv2DuRoobZHf0LaMgYYM3RZv/BZvgceAWg03zIcExLS/tR73QAKV7o9W8DedwYnNdzpv4GfDrGzAYeO0xNNqPRlwCbTuPqsQaFhYV54XD4JC/y+2eYpnyLEFiY/dgFpdS2y+TJkzNily5lVoXDZ20Y1YEC39Ng/JQF4/y5sB75gRPv3CEEB++jMOr8UCgUpslZTN4bamokoRIl4PMt5Uq1wtv22kAKfbD2e9D0doIhNC5HeHnRxsOD37WzLNh1LsbutHFUUzhgkk8zlXpd41pLg95wJNVpivKL/DEWK0Y4mQhBx4T1xu/QWMizgkllhWLw/hN4LyO4XeDMQ6PRqAGdEg6A+coQzrcTDcZU5jHv1+yQTPTdnV2V0KWI8IKJ+Q1Nja9R2y6CmTzb7oDwqm2JWNeVaowE/c00XNoyMgYNQd2SagyChyORzU5jEOxEJNIExbZQmwocsCTe+vh/6yCV7Nfw8Dv7MwZxqW+ub3Qzd3X87JIr4DABguMUTobweMQgcKJUV1dfcBqDENgBj9sELiFW2sYgGNEjKqyx8TiTHrLbdu2Sbl5Hm5wKtuM0eNw/Ee/3aEq0MKFa0jMzD1dVVXXGKQb2T6GkoaHhMDxzYAwkP21Jh9HYQVa4uxFG28rLSxBSPAgZuxsiV+8MJw8yStAb+Jfkcip2793AhbEedTYNjLq40OtD2FT7sD6nYaxmd0bGESxyj00Tr3khyYrwZhhC1CPC9HHyrgsXjjsGjOs7ljEXLFyDiXbCspa1sP2nw8zTTQRY+nW1f2QgPO1187RVtXqtnsrgRvpQoCM1TKSOo9iLg7oMuszH/FDK4Z1M0lly00VqWoYwxMqYjHUGg0EPGESvxwTnTJhzgUwT5z5KXkHBnhZdP4I1mYSuBhnnwEhzIB8tDZOdXdGA1/eK5nGvRSLTRunt4Q8+9IIGaigXixndl9rOo9dPievZB2nlxnmsYCEdsHDgWmCJX6JYjJl6IMaiFYiBmQnELWxYxvD5dyL2/hltShO/gC/g+HIHMp2rR/WYpmml1DcyXmmKSyUNzs0uoq+oqDAy2eDpOLh+C5fXU3lA1jQY51HZ07OLwmNNTQ0ZzUowLFrKDK/3MXaVbJZBKM4h23ka8Xu8Kz0th7tdxZomZsJbnoFnx9NApQp6Oju/mSrUrehjZyyDIg/2KlEPx7gPCUC+J2PQKPrQXzeQeUxhurgwn4XDB5csWZLI+/vjhd2UqyFRgSNYhy7RUcaFQ/6JsK77MrKzhro1MVFj2teRXDxPYYlosGGmbNu8eTqFL6zXKYKhmNyl3Y5kZ3B/X6hJHx0nTf67ks14C7kxGaCm99sXLPBpEHAtYSUTidye+resSFZq88Lirw1FklkWwYM+H5IkSHGTJTs391B72/nhuFh+t7y8nFLPxJmQymp8wfiRPfzKAkxzl5vz5al46h87duwiKvqO4fs7zttRiCdz0WYQcAKqffgi+Mbg04Rpfh71+/huuFg7BKnvnUXewMJrjZI8eYjiftLhoEluN8WsrMSBu6kmso2MxAA8HSfavQ3cYr+UCnP0k3Iw4XfAWfw2zH+FsPs+gn6Rz+frvdE7qRjD3WZEVEUnw3BVCE2v1zY20oJbpaggcD/WZ6bdt+v4UwgfYveFwqsGChzqTRsmFVs/derUQXafarr30UWQaifcbrvG+v1fNKR8A5YejMN7LQQ6IJgKS8XhKOweeCZuqr1FqV12U2Oixjr4AQDdvci/NwglPswdOXxnZWWldUm0aT+uRu5VBf+fZ9EpvgEhzOAu1wnE/yHcNJdAhtn98lAcu1lNj4+Va6GsGzfOajxn0I5gOcOGrm9vu/iwCQWVocb58/PzhMdTp8U0t+EyoLocGZPdowkL3au55tpozwWdHsSZskOZyoPdUAFFDwIXwRUxa8um8rmQy3IUhKkekebeS+MGZWX9pvPy5e9juhHAf/Xc6TNVuChuhY5N6I/EJXwxdC3u7ux8CK8e85xpMY3HrdL3CggXUOe6RfDVuCf8zqah54iTelMNAmjQhlF9racTKNKKODrCSedsI++/TcUMCicJj3PiMf4s5hlOMMTtraGmSPxGj37vO1M1FjQRfuEgfZ5OvF5vOs7rnyBnXoOFcmMnrECIOYeFhNPJ3wN2Gy5pr3YZ0VWnTp2y0qL4c0vTv+1F7yOPowMeOJtUmfNCCoeaDUO/DL79Zocw0CG34PPonuVgx0RDpHGR4NrjUAJPAsQ8WejQAoweDmc5jUEUlIEgSs7AElHcpCxwwAWp9zkkEbMgw2Enk/j84ueC8R874c42wks9F2wGjNbv+aDrene4KfIkdPk25nhbMnMR8cATCHY/P4nk5SlP5qBHbWMQztLPpd0N3BoQUgizUmHC9ZYr5By43X/FaQzCYXfu1jyeOzDfdiy8fchbw9A/DZ6/yBmWOyXVGEQAfLJQXDMMYzRCRYamaRcXLVp0BrEyVZDkgN4WxcmLra2FhilcOcNyjlPsJtj51tY7iERJLUZPFlcNTAHAG/kEvz/f5DwocZbg8efo8UikdZJ30uArvD2fyHHZukhvPilDrW5JScmQaEdHPp6eovV6fe21aAhGl7VYLObp6uoy4AzR/uiccHpCam9vHwlYegZ211E4ERb8hjINRIBsHuOj04RxgfRx8k1t/xdRRiINwgL8gAAAAABJRU5ErkJggg=="

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_84__;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Front = __webpack_require__(86);

	var _Front2 = _interopRequireDefault(_Front);

	var _Back = __webpack_require__(87);

	var _Back2 = _interopRequireDefault(_Back);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SearchBar = _react2.default.createClass({
	  displayName: 'SearchBar',

	  propTypes: {
	    onSearch: _react2.default.PropTypes.func
	  },

	  getInitialState: function getInitialState() {
	    return {
	      showInsuranceCardExample: false
	    };
	  },


	  showInsuranceCardExample: function showInsuranceCardExample(evt) {
	    evt.preventDefault();
	    evt.stopPropagation();

	    this.setState({
	      showInsuranceCardExample: true
	    });
	  },

	  hideInsuranceCardExample: function hideInsuranceCardExample(evt) {
	    this.setState({
	      showInsuranceCardExample: false
	    });
	  },

	  getViewToRender: function getViewToRender() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      this.state.showInsuranceCardExample ? _react2.default.createElement(_Back2.default, _extends({
	        hideInsuranceCardExample: this.hideInsuranceCardExample
	      }, this.props)) : undefined,
	      _react2.default.createElement(_Front2.default, _extends({
	        showInsuranceCardExample: this.showInsuranceCardExample
	      }, this.props))
	    );
	  },

	  render: function render() {
	    var view = this.getViewToRender();
	    return _react2.default.createElement(
	      'div',
	      null,
	      view
	    );
	  }
	});

	exports.default = SearchBar;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _React$createClass;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SearchInput = __webpack_require__(69);

	var _SearchInput2 = _interopRequireDefault(_SearchInput);

	var _CircleButton = __webpack_require__(12);

	var _CircleButton2 = _interopRequireDefault(_CircleButton);

	var _rcSlider = __webpack_require__(14);

	var _rcSlider2 = _interopRequireDefault(_rcSlider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var VelocityTransitionGroup = __webpack_require__(72);

	__webpack_require__(73);

	var Front = _react2.default.createClass((_React$createClass = {
	  displayName: 'Front',


	  getInitialState: function getInitialState() {
	    return {
	      showSecondPageButtons: false,
	      showMoreSearchOptions: false,
	      hideBody: this.props.query ? true : false,
	      slider: { value: this.props.slider ? this.props.slider : 10 },
	      plans: ['Plan 1', 'Plan 2'],
	      selectedPlan: this.props.selectedPlan ? this.props.selectedPlan : 'Please select your plan',
	      buttonOrder: [0, 1, 2, 5],
	      buttons: [{ // 0
	        name: 'dentist',
	        color: '#00C9F0',
	        action: this.handleFilterChange.bind(this, 'dentist')
	      }, { // 1
	        name: 'pediatric',
	        color: '#F32DC0',
	        action: this.handleFilterChange.bind(this, 'pediatric')
	      }, { // 2
	        name: 'orthodontist',
	        color: '#FABB1E',
	        action: this.handleFilterChange.bind(this, 'orthodontist')
	      }, { // 3
	        name: 'periodontist',
	        color: '#BB59D2',
	        action: this.handleFilterChange.bind(this, 'periodontist')
	      }, { // 4
	        name: 'surgeon',
	        color: '#68E37E',
	        action: this.handleFilterChange.bind(this, 'surgeon')
	      }, { // 5
	        image: __webpack_require__(77),
	        description: 'more',
	        color: '#F6F6F6',
	        textColor: '#9B9B9B',
	        action: function (name, evt) {
	          this.setState({
	            showSecondPageButtons: !this.state.showSecondPageButtons
	          });
	        }.bind(this, 'more')
	      }, {
	        name: 'pathologist',
	        color: '#607afb',
	        action: this.handleFilterChange.bind(this, 'pathologist')
	      }, {
	        name: 'prosthodonist',
	        color: '#666666',
	        action: this.handleFilterChange.bind(this, 'prosthodonist')
	      }, {
	        name: 'endodontist',
	        color: '#d01d80',
	        action: this.handleFilterChange.bind(this, 'endodontist')
	      }]
	    };
	  },

	  handleFilterChange: function handleFilterChange(name, evt) {
	    this.props.onSearch(evt.target.checked, 'speciality', name);
	  },

	  handlePlanChange: function handlePlanChange(evt) {
	    var selectedPlan = evt.target.value;
	    this.setState({
	      selectedPlan: selectedPlan
	    });

	    this.props.onSearch(selectedPlan, 'selectedPlan');
	  },

	  onSliderChange: function onSliderChange(value) {
	    this.setState({
	      slider: { value: value }
	    });

	    this.props.onSearch(value, 'slider');
	  },

	  onClickSearch: function onClickSearch() {
	    var value = this.props.query;
	    this.props.onSearch(value, 'query');
	    this.setState({ showMoreSearchOptions: false });
	  },

	  handleOnFocus: function handleOnFocus(evt) {
	    this.setState({
	      showMoreSearchOptions: true
	    });
	  }

	}, _defineProperty(_React$createClass, 'onClickSearch', function onClickSearch(evt) {
	  this.setState({
	    showMoreSearchOptions: false
	  });
	}), _defineProperty(_React$createClass, 'handleSearchChange', function handleSearchChange(value) {
	  if (value === '') {
	    this.props.clearSearch();
	    this.setState({ showMoreSearchOptions: false });
	  } else {
	    this.setState({ showMoreSearchOptions: true });
	    this.props.onSearch(value, 'query');
	  }
	}), _defineProperty(_React$createClass, 'render', function render() {
	  var height = window.innerHeight;

	  return _react2.default.createElement(
	    'div',
	    { id: 'search-bar' },
	    _react2.default.createElement(
	      'header',
	      null,
	      _react2.default.createElement(_SearchInput2.default, { onChange: this.handleSearchChange, onFocus: this.handleOnFocus, query: this.props.query })
	    ),
	    _react2.default.createElement(
	      VelocityTransitionGroup,
	      {
	        enter: { animation: { translateY: [0, '-' + height + 'px'] }, duration: 500 },
	        leave: { animation: { translateY: ['-' + height + 'px', 0] }, duration: 500 } },
	      this.state.showMoreSearchOptions ? _react2.default.createElement(
	        'section',
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'sidebar-section' },
	            _react2.default.createElement(
	              'div',
	              null,
	              'Network',
	              _react2.default.createElement(
	                'a',
	                { href: '', onClick: this.props.showInsuranceCardExample, style: { paddingLeft: '5px', fontStyle: 'italic' } },
	                'Where can I find this?'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'sidebar-select' },
	              _react2.default.createElement(
	                'select',
	                { value: this.state.selectedPlan, onChange: this.handlePlanChange },
	                _react2.default.createElement(
	                  'option',
	                  { value: '' },
	                  'Please select your plan'
	                ),
	                this.state.plans.map(function (plan, i) {
	                  return _react2.default.createElement(
	                    'option',
	                    {
	                      value: plan,
	                      key: i },
	                    plan
	                  );
	                }.bind(this))
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'sidebar-section' },
	            _react2.default.createElement(
	              'div',
	              { className: 'slider' },
	              _react2.default.createElement(
	                'span',
	                null,
	                'Within'
	              ),
	              _react2.default.createElement(_rcSlider2.default, {
	                tipFormatter: null,
	                defaultValue: this.state.slider.value,
	                max: 50,
	                min: 1,
	                onChange: this.onSliderChange }),
	              _react2.default.createElement(
	                'span',
	                { className: 'slider-value' },
	                this.state.slider.value + ' mi'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'sidebar-section last' },
	            _react2.default.createElement(
	              'div',
	              { className: 'buttons' },
	              _react2.default.createElement(
	                VelocityTransitionGroup,
	                {
	                  enter: { animation: { translateX: [0, '800px'] }, duration: 500, style: { zIndex: 1000 } },
	                  leave: { animation: { translateX: ['800px', 0] }, duration: 500 } },
	                this.state.showSecondPageButtons ? _react2.default.createElement(
	                  'div',
	                  { className: 'button-group' },
	                  Array(6, 7, 8, 5).map(function (idx, i) {
	                    var button = this.state.buttons[idx];

	                    var name = button.description === undefined ? button.name : button.description;

	                    return _react2.default.createElement(
	                      'div',
	                      { key: idx, className: 'button-container' },
	                      _react2.default.createElement(_CircleButton2.default, _extends({}, button, { checked: this.props.speciality[name] })),
	                      _react2.default.createElement(
	                        'span',
	                        { className: 'button-name' },
	                        name[0].toUpperCase() + name.substring(1)
	                      )
	                    );
	                  }.bind(this))
	                ) : undefined
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'button-group' },
	                Array(1, 2, 3, 4, 6, 5).map(function (idx, i) {
	                  var button = this.state.buttons[idx];

	                  var name = button.description === undefined ? button.name : button.description;

	                  return _react2.default.createElement(
	                    'div',
	                    { key: idx, className: 'button-container' },
	                    _react2.default.createElement(_CircleButton2.default, button),
	                    _react2.default.createElement(
	                      'span',
	                      { className: 'button-name' },
	                      name[0].toUpperCase() + name.substring(1)
	                    )
	                  );
	                }.bind(this))
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'btn-pill-container' },
	              _react2.default.createElement(
	                'div',
	                { className: 'btn pill', onClick: this.onClickSearch },
	                'Search'
	              )
	            )
	          )
	        )
	      ) : undefined
	    )
	  );
	}), _React$createClass));

	exports.default = Front;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VelocityTransitionGroup = __webpack_require__(72);

	var back_arrow = __webpack_require__(79);
	var connection_dental = __webpack_require__(80);
	var maverist_dental_network = __webpack_require__(81);
	var maximum_care = __webpack_require__(82);
	var stratose = __webpack_require__(83);

	var Back = _react2.default.createClass({
	  displayName: 'Back',

	  getInitialState: function getInitialState() {
	    return {
	      hideBody: false
	    };
	  },

	  hideInsuranceCardExample: function hideInsuranceCardExample(evt) {
	    var _this = this,
	        _arguments = arguments;

	    evt.preventDefault();
	    evt.stopPropagation();

	    this.setState({
	      hideBody: true
	    });

	    setTimeout(function (evt) {
	      return _this.props.hideInsuranceCardExample(_arguments[0]);
	    }, 500);
	  },

	  render: function render() {
	    var width = window.innerWidth;

	    return _react2.default.createElement(
	      'div',
	      { id: 'search-bar', className: 'back' },
	      _react2.default.createElement(
	        'header',
	        null,
	        _react2.default.createElement(
	          'a',
	          { href: '', onClick: this.hideInsuranceCardExample },
	          _react2.default.createElement('img', { src: back_arrow, style: { paddingRight: '10px' } }),
	          'Back'
	        )
	      ),
	      _react2.default.createElement(
	        VelocityTransitionGroup,
	        {
	          runOnMount: true,
	          enter: { animation: { translateX: [0, width + 'px'] }, duration: 500 },
	          leave: { animation: { translateX: [width + 'px', 0] }, duration: 500 } },
	        !this.state.hideBody ? _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Look on the back of your card to find your network.'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'wrapper-image' },
	            _react2.default.createElement('img', { src: maximum_care }),
	            _react2.default.createElement('img', { src: connection_dental }),
	            _react2.default.createElement('img', { src: maverist_dental_network })
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'select: ',
	            _react2.default.createElement(
	              'b',
	              null,
	              'Renaissance'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'wrapper-image' },
	            _react2.default.createElement('img', { src: stratose })
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'select: ',
	            _react2.default.createElement(
	              'b',
	              null,
	              'Stratose'
	            )
	          )
	        ) : undefined
	      )
	    );
	  }
	});

	exports.default = Back;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Provider = __webpack_require__(6);

	var _Provider2 = _interopRequireDefault(_Provider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VelocityTransitionGroup = __webpack_require__(72);
	var classNames = __webpack_require__(7);

	var back_arrow = __webpack_require__(79);

	var DetailView = _react2.default.createClass({
	  displayName: 'DetailView',

	  getInitialState: function getInitialState() {
	    return {
	      hideBody: false
	    };
	  },

	  showSearchFilter: function showSearchFilter(evt) {
	    evt.preventDefault();
	    evt.stopPropagation();

	    this.setState({
	      hideBody: true
	    });
	  },

	  render: function render() {
	    var rating = this.props.provider.rating;
	    var provider = this.props.provider;

	    if (provider.address.address2 && provider.address.address2 != '') {
	      var address2 = _react2.default.createElement(
	        'span',
	        null,
	        provider.address.address2,
	        _react2.default.createElement('br', null)
	      );
	    }

	    var address_component = _react2.default.createElement(
	      'span',
	      null,
	      provider.address.address,
	      _react2.default.createElement('br', null),
	      address2,
	      provider.address.city,
	      ', ',
	      provider.address.state,
	      ' ',
	      provider.address.zip
	    );

	    var speciality_component = _react2.default.createElement(
	      'li',
	      null,
	      _react2.default.createElement('img', { src: __webpack_require__(89) }),
	      _react2.default.createElement(
	        'p',
	        null,
	        provider.specialities.size > 0 ? provider.specialities[0] : 'General Practitioner'
	      )
	    );

	    if (provider.address.phone) {
	      var phone_component = _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement('img', { src: __webpack_require__(90) }),
	        _react2.default.createElement(
	          'p',
	          null,
	          provider.address.phone
	        )
	      );
	    }

	    var lat_lng_string = provider.address.lat + ',' + provider.address.lng;
	    var mini_map_url = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat_lng_string + '&zoom=15&size=125x125&key=AIzaSyAflVNbLcSIFg_sRAz73vzjyqhBd4fa7gk';

	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { id: 'sidebar', className: 'detail-view' },
	        _react2.default.createElement(
	          'header',
	          null,
	          _react2.default.createElement(
	            'a',
	            { href: '', onClick: this.showSearchFilter },
	            _react2.default.createElement('img', { src: back_arrow, style: { paddingRight: '10px' } }),
	            'Back'
	          )
	        ),
	        _react2.default.createElement(
	          VelocityTransitionGroup,
	          {
	            runOnMount: true,
	            enter: {
	              animation: {
	                translateX: [0, '310px']
	              },
	              duration: 500
	            },
	            leave: {
	              animation: {
	                translateX: ['310px', 0]
	              },
	              duration: 500,
	              complete: this.props.showSearchFilter
	            } },
	          !this.state.hideBody ? _react2.default.createElement(
	            'section',
	            null,
	            _react2.default.createElement(
	              'div',
	              { className: 'map' },
	              _react2.default.createElement(
	                'div',
	                { style: { position: 'absolute', left: '130px', top: '55px' } },
	                _react2.default.createElement(_Provider2.default, provider)
	              ),
	              _react2.default.createElement('img', { src: mini_map_url })
	            ),
	            _react2.default.createElement(
	              'h1',
	              null,
	              provider.facility_name
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'rating' },
	              _react2.default.createElement(
	                'ul',
	                null,
	                Array(5).fill(null).map(function (m, i) {
	                  var classnames = classNames({
	                    active: i < rating
	                  });
	                  return _react2.default.createElement('li', { key: i, className: classnames });
	                })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'details' },
	              _react2.default.createElement(
	                'ul',
	                null,
	                speciality_component,
	                _react2.default.createElement(
	                  'li',
	                  null,
	                  _react2.default.createElement('img', { src: __webpack_require__(91) }),
	                  _react2.default.createElement(
	                    'p',
	                    null,
	                    address_component
	                  )
	                ),
	                phone_component
	              )
	            )
	          ) : undefined
	        )
	      )
	    );
	  }
	});

	exports.default = DetailView;

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAYAAABPwleqAAAAAXNSR0IArs4c6QAAAhFJREFUOBGFU0trE1EUPt8kxVroQtC9pZgoZtypUN2YxlcRIlSQJoqg4MKFuhMFISAUXbhwK60baVa+FuomDxEUdeEm06ipv8CFIAgx2s49njPNvU6GUGfzzfked+695wwo8bw5/2W893v1JjHniZElcIeA5uimkVsHH+z8Gbd78eL12WBXr7caSHA7ebgOpHKKZHhCedXjftjiVYXT4UrwgQiPC1V/3vIW66XgBhHPpjL+/kMVrCnvvhx+/XSSmDCdyd22gThGvOhrnXbR8i5MJtwrZA0VGCvGsc/XAKO+6PkXJmyV8/2wwlBUnbHNai4M0Gcy5Fa1hgFk2hf5+qQL8xg9ZPCRxplgaiDQLyKeqaA+q7twYcH/BsIVE/Kz2tzyrDUo1svtU8oT6Kr6rOZaZQkNgsw9MY4x04psMyNd6HrA5XzVf2J9iu7LWjTOBZNE5iiDtkhXvkOuVlHrkPnYuq7O9ceFm6XWjPnDH2UU02lszh6u+jtkWKYUtZYdjKjeKLeP23C07WZ5+YCs/BLwLhSWdj+yYhL17MxmMQXM5Jdyb9Efy46scn+6uudOMpCsG6XWNSa6KGOa9WSeT8vFdL2MfzdpHFZHPqZfmtMzF2W7T+2wDwvEucgHT2+9KGHI1OBd3PC/d4/M+yhXn2t1pafPZWYHfvQNFwCPS+9PpOWHv2TYuGHfMGRFaTw8vPgL/NLLmRp0t3UAAAAASUVORK5CYII="

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAmdJREFUOBGNk01oU0EQx2cmr20uSsU21bz0oIJ6UJRCsUd7sCiCIPUgKoIXbZIGCoJQaptN1Lb0YD8kaQRRL1qxoIgILd69KnpRvMnLa2oVRRHT9L0dd1u3RIpJ9jL7Zv7zY3bmDcLfE3PEQQaONjTUi4nmgQXjr9WSFkbz1/YoyDwzlIrFZbe3kN5fK8DoqHdJhFmuvEfGaK41laAAnPM97/llVzQZUS2W/JLsRoD5bKt4ohOy4fQDRJz5JXm2FoDREEuMmA9js3aqX8HDcTd10viqWcJNwVEGbI9+H9lSLlY9+8rsB8t9le403dj/DREew89inxHG8uKKquhL1k7PGF81a2lBPeFIyZdvYvnrd0Jhb3HRkecZIVMtuTy+Ov7JsPgERBOSV24KFCUkuggM2agjOsrFle6rIC2wgjCBwO0xV3RlbfEqQIEuAH6WcNIHKgFMbB10a6v4AWR1s5QPewpiX8ZOvgTCSx77c3FXtJmEvqUb2xOO2DBp1dN/T09enEaWo/V1DYcmWwYWo07qOIB/jwJWp/S9E+rvH1ZJvwHxdouN/aoVRU1Yr8jgcrZ4hAzjy6XlQmJhuHk6knwBSGd833unIO1WkOyWCDUqfVMhL9+addpQkQGqRl8F5gt1YB2dah38qJ4bym0Tn01cW7XopyTLWQrQsf+CVoXu0FmWMI5IY6Ew6InKcpC+9zjJjIIUK4K0sNcVez0pp5RwMzKNZSLJp2oXWcfi+dQRKeV9pLqOqiCdoM/aEDjOzDsQaI6Rd6mnH1aTbsvZQ69rBq3hVBWO2M0gOyXjTiTr7rQ9+EHH/gAwbfG8+pzMAgAAAABJRU5ErkJggg=="

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAJNJREFUOBFjZDj54T8DRYASA4B6mSiyHKh51IDRMAClIYrTAQs4JZ76sBtMwwnG3wysDPkMhvy3wUJn/nMx/P00g4HxvyRcCYgBzEWMDKc/uKAIgiWY9Bn+/ytgYGN0YvjL95Th38etQKUPgQYsQVfLiC4A55/+lMTw718jUOMDoFW3GMwFkuFyRDNAhpz6MBufegBb2S0rWHTsNQAAAABJRU5ErkJggg=="

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Provider = __webpack_require__(6);

	var _Provider2 = _interopRequireDefault(_Provider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VelocityTransitionGroup = __webpack_require__(72);
	var classNames = __webpack_require__(7);

	var back_arrow = __webpack_require__(79);

	var DetailView = _react2.default.createClass({
	  displayName: 'DetailView',

	  getInitialState: function getInitialState() {
	    return {
	      hideBody: false
	    };
	  },

	  showSearchFilter: function showSearchFilter(evt) {
	    evt.preventDefault();
	    evt.stopPropagation();

	    this.setState({
	      hideBody: true
	    });
	  },

	  render: function render() {
	    var rating = this.props.rating;

	    var width = window.innerWidth;

	    var provider = this.props.provider;

	    if (provider.address.address2 && provider.address.address2 != '') {
	      var address2 = _react2.default.createElement(
	        'span',
	        null,
	        provider.address.address2,
	        _react2.default.createElement('br', null)
	      );
	    }

	    var address_component = _react2.default.createElement(
	      'span',
	      null,
	      provider.address.address,
	      _react2.default.createElement('br', null),
	      address2,
	      provider.address.city,
	      ', ',
	      provider.address.state,
	      ' ',
	      provider.address.zip
	    );

	    var speciality_component = _react2.default.createElement(
	      'li',
	      null,
	      _react2.default.createElement('img', { src: __webpack_require__(89) }),
	      _react2.default.createElement(
	        'p',
	        null,
	        provider.specialities.size > 0 ? provider.specialities[0] : 'General Practitioner'
	      )
	    );

	    if (provider.address.phone) {
	      var phone_component = _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement('img', { src: __webpack_require__(90) }),
	        _react2.default.createElement(
	          'p',
	          null,
	          provider.address.phone
	        )
	      );
	    }

	    var lat_lng_string = provider.address.lat + ',' + provider.address.lng;
	    var mini_map_url = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat_lng_string + '&zoom=15&size=125x125&key=AIzaSyAflVNbLcSIFg_sRAz73vzjyqhBd4fa7gk';

	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { id: 'search-bar', className: 'detail-view' },
	        _react2.default.createElement(
	          'header',
	          null,
	          _react2.default.createElement(
	            'a',
	            { href: '', onClick: this.showSearchFilter },
	            _react2.default.createElement('img', { src: back_arrow, style: { paddingRight: '10px' } }),
	            'Back'
	          )
	        ),
	        _react2.default.createElement(
	          VelocityTransitionGroup,
	          {
	            runOnMount: true,
	            enter: {
	              animation: {
	                translateX: [0, width + 'px']
	              },
	              duration: 500
	            },
	            leave: {
	              animation: {
	                translateX: [width + 'px', 0]
	              },
	              duration: 500,
	              complete: this.props.showSearchFilter
	            } },
	          !this.state.hideBody ? _react2.default.createElement(
	            'section',
	            null,
	            _react2.default.createElement(
	              'div',
	              { className: 'map' },
	              _react2.default.createElement(
	                'div',
	                { style: { position: 'absolute', left: width / 2 - 22 + 'px', top: '55px' } },
	                _react2.default.createElement(_Provider2.default, provider)
	              ),
	              _react2.default.createElement('img', { src: mini_map_url })
	            ),
	            _react2.default.createElement(
	              'h1',
	              null,
	              provider.facility_name
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'rating' },
	              _react2.default.createElement(
	                'ul',
	                null,
	                Array(5).fill(null).map(function (m, i) {
	                  var classnames = classNames({
	                    active: i < rating
	                  });
	                  return _react2.default.createElement('li', { key: i, className: classnames });
	                })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'details' },
	              _react2.default.createElement(
	                'ul',
	                null,
	                speciality_component,
	                _react2.default.createElement(
	                  'li',
	                  null,
	                  _react2.default.createElement('img', { src: __webpack_require__(91) }),
	                  _react2.default.createElement(
	                    'p',
	                    null,
	                    address_component
	                  )
	                ),
	                phone_component
	              )
	            )
	          ) : undefined
	        )
	      )
	    );
	  }
	});

	exports.default = DetailView;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(94);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(75)();
	// imports


	// module
	exports.push([module.id, "html {\n  height: 100%; }\n\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: proxima-nova, sans-serif;\n  font-weight: 100;\n  color: white;\n  background: #666666;\n  /*font-family: RobotoDraft, Helvetica Neue, Helvetica, Arial, sans-serif;*/ }\n\ninput, button, select {\n  font-family: proxima-nova, sans-serif;\n  font-weight: 100;\n  /*font-family: RobotoDraft, Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  /*font-size: 1em;*/ }\n\na {\n  color: #00C9F0;\n  /*text-decoration: none;*/ }\n\na:hover {\n  color: #1565c0; }\n\n.icon {\n  fill: currentColor; }\n\n.btn {\n  text-decoration: none;\n  color: white;\n  font-size: 16px;\n  font-weight: 100;\n  padding: 0 20px;\n  line-height: 36px;\n  height: auto;\n  display: inline-block;\n  text-align: center;\n  background-color: #00C9F0; }\n\n.btn:hover {\n  cursor: pointer; }\n\n.btn.pill {\n  border-radius: 18px; }\n\n.btn-pill-container {\n  text-align: center;\n  width: 100%; }\n\n.buttons {\n  height: 180px; }\n\n#search-bar {\n  overflow: hidden;\n  position: absolute;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%; }\n  #search-bar header {\n    cursor: default;\n    padding: 12px;\n    color: #fff;\n    background-color: #0089A3;\n    z-index: 1000; }\n  #search-bar section {\n    min-height: 100vh;\n    color: black;\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    background-color: white;\n    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.26); }\n\n.search-container img {\n  display: table-cell; }\n\n.search-container .inner {\n  display: table;\n  width: 100%; }\n\n.search-container .search-input {\n  display: table-cell;\n  width: 100%;\n  font-size: 20px;\n  color: white;\n  padding: 0 10px; }\n\n.search-container .search-input input[type=text] {\n  width: 100%;\n  position: relative;\n  /*top: 0;*/\n  /*left: 0;*/\n  color: white;\n  font-size: 20px;\n  background-color: transparent;\n  border: none;\n  outline: 0;\n  border-bottom: 1px solid white; }\n\n.search-container .search-input .fake-placeholder {\n  position: absolute;\n  padding-left: 1px; }\n\n.search-container .close-icon:hover {\n  cursor: pointer; }\n\n#map-canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  /*left: 500px;*/\n  right: 0;\n  bottom: 0;\n  min-width: 300px; }\n\n#find-me {\n  position: absolute;\n  bottom: 40px;\n  right: 40px;\n  background: white;\n  box-shadow: 0px 1px 3px #888888;\n  border-radius: 50%;\n  width: 42px;\n  height: 42px;\n  cursor: pointer; }\n\n#find-me .overlay {\n  position: relative;\n  top: 9px;\n  left: 9px; }\n\n.flag {\n  font-size: 13px;\n  height: 22px;\n  width: 36px;\n  color: white; }\n  .flag.lg {\n    width: 44px; }\n    .flag.lg .arrow-down {\n      position: relative;\n      top: 22px;\n      left: 15px;\n      width: 0;\n      height: 0;\n      border-left: 7px solid transparent;\n      border-right: 7px solid transparent;\n      border-top-width: 7px;\n      border-top-style: solid;\n      border-top-color: inherit; }\n  .flag .body {\n    width: 100%;\n    padding: 2px;\n    top: 2px;\n    position: absolute;\n    text-align: left; }\n    .flag .body .number {\n      padding-left: 4px; }\n    .flag .body .star {\n      position: absolute;\n      right: 10px;\n      width: 12px;\n      top: 1px;\n      background: url(" + __webpack_require__(95) + ") center center no-repeat; }\n  .flag .arrow-down {\n    position: relative;\n    top: 22px;\n    left: 11px;\n    width: 0;\n    height: 0;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-top-width: 7px;\n    border-top-style: solid;\n    border-top-color: inherit; }\n\n#sidebar {\n  color: black;\n  position: absolute;\n  top: 40px;\n  left: 40px;\n  overflow: hidden;\n  /*bottom: 40px;*/\n  width: 300px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n#sidebar header {\n  cursor: default;\n  padding: 12px 15px;\n  color: #fff;\n  background-color: #0089A3;\n  z-index: 1000;\n  /*height: 60px;*/ }\n\n#sidebar header a, #search-bar header a {\n  color: white;\n  text-decoration: none;\n  font-size: 22px;\n  line-height: 27px; }\n\n#sidebar header h1 {\n  font-size: 1.4em;\n  font-weight: 400;\n  margin: 0;\n  padding: 0; }\n\n#sidebar section {\n  -webkit-transform: translateY(-410px);\n          transform: translateY(-410px);\n  background: white;\n  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.26);\n  height: 410px; }\n\n.back .wrapper-image {\n  background: #F2F2F2;\n  padding: 12px;\n  border-radius: 10px; }\n  .back .wrapper-image * {\n    padding: 5px; }\n\n#sidebar.back, #search-bar.back {\n  z-index: 1001; }\n\n#sidebar.back section, #search-bar.back section {\n  padding: 0 10px;\n  text-align: center; }\n\n#sidebar.back section h1, #search-bar.back section h1 {\n  font-size: 20px;\n  font-weight: 100;\n  padding: 10px 0;\n  margin: 0; }\n\n#sidebar.detail-view, #search-bar.detail-view {\n  z-index: 1005; }\n  #sidebar.detail-view section, #search-bar.detail-view section {\n    overflow-y: auto; }\n    #sidebar.detail-view section .map, #search-bar.detail-view section .map {\n      text-align: center;\n      margin-top: 20px;\n      -webkit-clip-path: circle(60px at center);\n              clip-path: circle(60px at center); }\n    #sidebar.detail-view section h1, #search-bar.detail-view section h1 {\n      margin: 0;\n      padding-top: 10px;\n      font-size: 20px;\n      font-weight: 100;\n      text-align: center; }\n    #sidebar.detail-view section .rating ul, #search-bar.detail-view section .rating ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n      padding-top: 10px;\n      padding-bottom: 10px;\n      text-align: center; }\n      #sidebar.detail-view section .rating ul li, #search-bar.detail-view section .rating ul li {\n        display: inline;\n        padding: 10px;\n        background: url(" + __webpack_require__(96) + ") center center no-repeat; }\n      #sidebar.detail-view section .rating ul li.active, #search-bar.detail-view section .rating ul li.active {\n        background: url(" + __webpack_require__(97) + ") center center no-repeat; }\n    #sidebar.detail-view section .details ul, #search-bar.detail-view section .details ul {\n      list-style-type: none;\n      padding: 0 30px;\n      margin: 0;\n      overflow: hidden; }\n      #sidebar.detail-view section .details ul li, #search-bar.detail-view section .details ul li {\n        font-size: 16px;\n        border-bottom: 1px solid #E6E6E6; }\n        #sidebar.detail-view section .details ul li:last-child, #search-bar.detail-view section .details ul li:last-child {\n          border-bottom: 0; }\n        #sidebar.detail-view section .details ul li p, #search-bar.detail-view section .details ul li p {\n          padding-left: 30px; }\n        #sidebar.detail-view section .details ul li img, #search-bar.detail-view section .details ul li img {\n          float: left; }\n\nsection .sidebar-section.last {\n  border: 0;\n  height: 240px; }\n\n.sidebar-select {\n  margin-top: 10px;\n  overflow: hidden;\n  background: url(" + __webpack_require__(98) + ") no-repeat right 10px center; }\n\n.sidebar-select select {\n  background: transparent;\n  width: 100%;\n  padding: 5px;\n  font-size: 16px;\n  line-height: 1;\n  border: 1px solid #CCCCCC;\n  border-radius: 3px;\n  height: 34px;\n  -webkit-appearance: none; }\n\n.button-group {\n  height: 180px;\n  width: 100%;\n  margin-left: -15px;\n  position: absolute;\n  background: white; }\n\n@media (max-width: 800px) {\n  .button-container {\n    width: 25% !important; } }\n\n.button-container {\n  text-align: center;\n  display: inline-block;\n  padding: 10px 0 5px;\n  width: 33%; }\n\n.button-name {\n  padding-top: 5px;\n  display: block;\n  font-size: 11px !important; }\n\n.circle {\n  border-radius: 50%;\n  width: 42px;\n  height: 42px;\n  cursor: pointer;\n  margin-bottom: 2px; }\n\n.circle-button {\n  position: relative;\n  display: inline-block; }\n\n.circle-shape-overlay {\n  position: relative;\n  top: 14px;\n  left: 2px; }\n\n.circle-letter-overlay {\n  position: relative;\n  top: 13px;\n  font-size: 16px !important; }\n\n.sidebar-section {\n  padding: 15px;\n  /*word-spacing: 10px;*/\n  border-bottom: 1px solid #ddd; }\n\n.sidebar-section label {\n  display: block;\n  color: #aaa; }\n\n.sidebar-section {\n  /*font-size: .8em;*/\n  font-size: 12px; }\n\n.sidebar-section.stars .title {\n  float: left;\n  padding-top: 14px; }\n\n#directions-form {\n  padding: 15px;\n  word-spacing: 10px;\n  border-bottom: 1px solid #ddd; }\n\n#directions-form .field-section {\n  display: inline-block;\n  width: 198px;\n  position: relative; }\n\n#directions-form .field-section:after {\n  content: '';\n  pointer-events: none;\n  position: absolute;\n  width: 30px;\n  top: 0;\n  right: 0;\n  bottom: 10px;\n  background-image: -webkit-linear-gradient(right, white, rgba(255, 255, 255, 0));\n  background-image: linear-gradient(to left, white, rgba(255, 255, 255, 0)); }\n\n#directions-form label {\n  display: block;\n  font-size: .8em;\n  color: #aaa; }\n\n#directions-form .options {\n  margin-top: 5px;\n  padding: 5px 0;\n  float: left;\n  color: #aaa; }\n\n#directions-form .options .icon {\n  -webkit-transition: -webkit-transform .6s;\n  transition: -webkit-transform .6s;\n  transition: transform .6s;\n  transition: transform .6s, -webkit-transform .6s; }\n\n#directions-form .options .icon + span {\n  margin-left: 5px;\n  opacity: 0;\n  -webkit-transition: opacity .6s;\n  transition: opacity .6s; }\n\n#directions-form .options:hover .icon {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n#directions-form .options:hover .icon + span {\n  opacity: 1; }\n\n#directions-form .options label {\n  display: inline-block; }\n\n#directions-form select {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  background-color: rgba(0, 0, 0, 0.05); }\n\n#directions-form input {\n  border: 0;\n  padding: 10px 0;\n  border-bottom: 2px solid #e0e0e0;\n  margin: 0 0 5px;\n  width: 198px;\n  box-sizing: border-box;\n  outline: 0;\n  -webkit-transition: border-bottom-color .3s;\n  transition: border-bottom-color .3s; }\n\n#directions-form input:focus {\n  border-bottom-color: #259b24; }\n\n#directions-form .form-footer {\n  text-align: right;\n  margin-top: 10px; }\n\n#flip-direction {\n  color: #aaa;\n  box-sizing: border-box;\n  padding: 10px;\n  line-height: 14px;\n  display: inline-block; }\n\n#flip-direction .icon {\n  -webkit-transition: -webkit-transform .6s;\n  transition: -webkit-transform .6s;\n  transition: transform .6s;\n  transition: transform .6s, -webkit-transform .6s; }\n\n#flip-direction:hover .icon {\n  -webkit-transform: rotateY(-180deg);\n  transform: rotateY(-180deg); }\n\n#directions-form button {\n  border: 0;\n  padding: 7px 10px;\n  margin: 0;\n  background-color: #0089A3;\n  color: #fff;\n  font-weight: 500;\n  text-align: left;\n  text-transform: uppercase;\n  cursor: pointer;\n  box-sizing: border-box;\n  box-shadow: 0 2px 3px #aaa; }\n\n#directions-form button:active {\n  opacity: .7; }\n\n#routes-container {\n  background-color: #eee;\n  position: relative;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n#routes-container > p {\n  margin: 30px 15px;\n  text-align: center;\n  color: #999; }\n\n#routes-list {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow-y: auto;\n  overflow-x: hidden; }\n\n#routes-list, #routes-list li {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n#routes-list a {\n  cursor: pointer;\n  display: block;\n  text-decoration: none;\n  padding: 15px;\n  color: #9e9e9e;\n  border-bottom: 1px solid #ddd;\n  background-color: #fff;\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s; }\n\n#routes-list .heading {\n  margin-bottom: .5em; }\n\n#routes-list a:hover .heading {\n  color: #0d5302; }\n\n#routes-list .selected a {\n  color: #0d5302;\n  background-color: #d0f8ce; }\n\n#routes-list .heading, #routes-list .stats, #routes-list .metadata, #routes-list :not(.selected) a .chart {\n  pointer-events: none; }\n\n#routes-list .heading .icon {\n  vertical-align: text-bottom; }\n\n#routes-list .stats {\n  float: right;\n  margin-top: .5em;\n  opacity: .65;\n  font-size: .8em; }\n\n#routes-list .metadata {\n  margin-top: .5em;\n  opacity: .65;\n  font-size: .8em; }\n\n.icon {\n  display: inline-block;\n  vertical-align: middle; }\n\n.chart {\n  position: relative;\n  white-space: nowrap;\n  -webkit-transition: height .3s;\n  transition: height .3s; }\n\n.chart div {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 2px;\n  height: 100%;\n  border-bottom-style: solid;\n  border-bottom-color: #a3e9a4;\n  overflow: hidden; }\n\n.selected .chart div {\n  border-bottom-color: #72d572; }\n\n.chart div:hover {\n  background-color: #72d572;\n  border-bottom-color: #0a7e07; }\n\n.chart div span {\n  pointer-events: none;\n  font-size: .7em;\n  padding: .5em;\n  height: 1em;\n  line-height: 1em;\n  opacity: 0;\n  color: #fff;\n  background-color: rgba(10, 126, 7, 0.75);\n  position: absolute;\n  top: -2em; }\n\n.chart div:hover span {\n  opacity: 1; }\n\n.react-rater {\n  font-size: 30px; }\n\n.react-rater a {\n  color: #ccc; }\n\n.react-rater a.will-be-active {\n  color: #FFEF0C; }\n\n.react-rater a.is-active {\n  color: #FFEF0C; }\n", ""]);

	// exports


/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAAAXNSR0IArs4c6QAAAPlJREFUKBWFUbtKA1EQPecuQlAXAykstrHzA7RMGhshEES0TiHY2Ot/+B1+hYI2Sb5AwUaLFEsehSlC9mR2MOtmDTpw75w7c2aGORfYYJrGHY12P8w3qulQDfg7w5X5BBnOq/lfBdL+DqTTb+JFtYDSQQ2TtAuy5knhEMpuHBNzKNwh2KzcqHdqvHcMLXoe+O8ihoH1SR8Rz2xC+ief7IOhWXD01Ug0jl9MHW0499LRVk4uluZ2+gnhrehQBoyeycF8rcA7EJ0Sb/aDF5crXEzA9PXE5KwjV4a8BaPE8IMTxbaruarKvf1qS6P40VUrJWyva4s/+f9YfAkzc2HiayYfMAAAAABJRU5ErkJggg=="

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAXNSR0IArs4c6QAAATdJREFUKBWlkrtKxUAQhnc3wdriQC5W5x28gE9wQFDUwqdQsLU6naWF5ynsxU4t1EYbfQCxkCSLFraC2fitZCUrm8DBhWFm/n/m39mLEAOrLMtLawMlQvaRRVEsw923/Eqe5w+hWhUCW2y3w3XjDizEvwVk0zRSa71hjFl00kqpEfmJy60HOwR7dxj5R5Ik55KzTgAvHDGPj6JoouI4vpFSXs/TaGvpucJuf16BYyie6whgShwNiVHzRc00y7JjYuM9I3exXtf1GQJLPSKvjL3H2e8c771CS2hHBrzuNlvem6CqqjE3/Rxo/IUYe8z4Lw7wJuBsO45o/SMNT38w71P1CtB4yk5raZquEs+cCJtsu9h6T4DcUPzGJ9mk+YD40xrxPtgWvP1IBgsv1GNsIcwKYTlb0+W/AU+Zbk4gR/BoAAAAAElFTkSuQmCC"

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAVBJREFUKBWNUrtKA0EUPXc3CYE8NhGCAcHGSsSIWKRIa6+QMtZ+QTobO/s0/oF2YmoL0/gBNuIHiIUE3WSDQkjmemfZx5jdxQzMzsx5MXPvAhmD3cq5zA+e1fczJNmwGF/4q8wyB9mqFIa98m5g1OY3ZqYUGaw0EApdA9/C1Gkb52ibY29jD2pxGCF6w9yTTwwx93lSvY8BibfUA+miiLhhEOttCbcWmK5AWK7nCFREY1h07ReCp5UOlnwj1Pa/IYRH5ItnVBq/+wWjqvcE5A5AZL4rmUN0Aad/rI2ajKpNddcV8yjpMBA7PyS6VCESmX1AsdmiUBOvav6Hj8w8azRB3ImV+Jab3BlnrPQ/vjYWPyfS2jDsGTYdUc3rynoqIZ9BSItdZycMDMVyJiUt0+8ZoNZsSxFftUjWIQqFlnAjmXP5OWyNJwbzZikBGsAq/wunK25L60xccAAAAABJRU5ErkJggg=="

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAHCAYAAAA4R3wZAAAAAXNSR0IArs4c6QAAAPVJREFUGBljnDdvnv3fv3/XMDEx+SUnJx9nwAMWLVrE/evXr93///8/wwhSN3fuXLd///4tZWZmdk9KSjqHTe/8+fM5gBZsB8rdAVqQxgRSBGTsYmRkTAJq3jFnzhwddI2rVq1iA2paD7TpKVBtOlDtf7BGkMKUlJTNQIEcIHP3woUL1WCa9+/fz/Lp06eVQP43fn7+eKCafyA5uEYQB2jaKqBEOdAf+4D+UQTawHT37t0lQClWAwODiLCwsL8gdSAA9iOEiSCBzk0H8iqBGo8BaVEWFhbfxMTEHwgVODSCFMyePTsPaDsnBwfH9JiYmE/ImkBsAHjpYf9rO3YjAAAAAElFTkSuQmCC"

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */

	/*************************
	   Velocity jQuery Shim
	*************************/

	/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */

	/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
	/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
	/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */

	;(function (window) {
	    /***************
	         Setup
	    ***************/

	    /* If jQuery is already loaded, there's no point in loading this shim. */
	    if (window.jQuery) {
	        return;
	    }

	    /* jQuery base. */
	    var $ = function (selector, context) {
	        return new $.fn.init(selector, context);
	    };

	    /********************
	       Private Methods
	    ********************/

	    /* jQuery */
	    $.isWindow = function (obj) {
	        /* jshint eqeqeq: false */
	        return obj != null && obj == obj.window;
	    };

	    /* jQuery */
	    $.type = function (obj) {
	        if (obj == null) {
	            return obj + "";
	        }

	        return typeof obj === "object" || typeof obj === "function" ?
	            class2type[toString.call(obj)] || "object" :
	            typeof obj;
	    };

	    /* jQuery */
	    $.isArray = Array.isArray || function (obj) {
	        return $.type(obj) === "array";
	    };

	    /* jQuery */
	    function isArraylike (obj) {
	        var length = obj.length,
	            type = $.type(obj);

	        if (type === "function" || $.isWindow(obj)) {
	            return false;
	        }

	        if (obj.nodeType === 1 && length) {
	            return true;
	        }

	        return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
	    }

	    /***************
	       $ Methods
	    ***************/

	    /* jQuery: Support removed for IE<9. */
	    $.isPlainObject = function (obj) {
	        var key;

	        if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
	            return false;
	        }

	        try {
	            if (obj.constructor &&
	                !hasOwn.call(obj, "constructor") &&
	                !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
	                return false;
	            }
	        } catch (e) {
	            return false;
	        }

	        for (key in obj) {}

	        return key === undefined || hasOwn.call(obj, key);
	    };

	    /* jQuery */
	    $.each = function(obj, callback, args) {
	        var value,
	            i = 0,
	            length = obj.length,
	            isArray = isArraylike(obj);

	        if (args) {
	            if (isArray) {
	                for (; i < length; i++) {
	                    value = callback.apply(obj[i], args);

	                    if (value === false) {
	                        break;
	                    }
	                }
	            } else {
	                for (i in obj) {
	                    value = callback.apply(obj[i], args);

	                    if (value === false) {
	                        break;
	                    }
	                }
	            }

	        } else {
	            if (isArray) {
	                for (; i < length; i++) {
	                    value = callback.call(obj[i], i, obj[i]);

	                    if (value === false) {
	                        break;
	                    }
	                }
	            } else {
	                for (i in obj) {
	                    value = callback.call(obj[i], i, obj[i]);

	                    if (value === false) {
	                        break;
	                    }
	                }
	            }
	        }

	        return obj;
	    };

	    /* Custom */
	    $.data = function (node, key, value) {
	        /* $.getData() */
	        if (value === undefined) {
	            var id = node[$.expando],
	                store = id && cache[id];

	            if (key === undefined) {
	                return store;
	            } else if (store) {
	                if (key in store) {
	                    return store[key];
	                }
	            }
	        /* $.setData() */
	        } else if (key !== undefined) {
	            var id = node[$.expando] || (node[$.expando] = ++$.uuid);

	            cache[id] = cache[id] || {};
	            cache[id][key] = value;

	            return value;
	        }
	    };

	    /* Custom */
	    $.removeData = function (node, keys) {
	        var id = node[$.expando],
	            store = id && cache[id];

	        if (store) {
	            $.each(keys, function(_, key) {
	                delete store[key];
	            });
	        }
	    };

	    /* jQuery */
	    $.extend = function () {
	        var src, copyIsArray, copy, name, options, clone,
	            target = arguments[0] || {},
	            i = 1,
	            length = arguments.length,
	            deep = false;

	        if (typeof target === "boolean") {
	            deep = target;

	            target = arguments[i] || {};
	            i++;
	        }

	        if (typeof target !== "object" && $.type(target) !== "function") {
	            target = {};
	        }

	        if (i === length) {
	            target = this;
	            i--;
	        }

	        for (; i < length; i++) {
	            if ((options = arguments[i]) != null) {
	                for (name in options) {
	                    src = target[name];
	                    copy = options[name];

	                    if (target === copy) {
	                        continue;
	                    }

	                    if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
	                        if (copyIsArray) {
	                            copyIsArray = false;
	                            clone = src && $.isArray(src) ? src : [];

	                        } else {
	                            clone = src && $.isPlainObject(src) ? src : {};
	                        }

	                        target[name] = $.extend(deep, clone, copy);

	                    } else if (copy !== undefined) {
	                        target[name] = copy;
	                    }
	                }
	            }
	        }

	        return target;
	    };

	    /* jQuery 1.4.3 */
	    $.queue = function (elem, type, data) {
	        function $makeArray (arr, results) {
	            var ret = results || [];

	            if (arr != null) {
	                if (isArraylike(Object(arr))) {
	                    /* $.merge */
	                    (function(first, second) {
	                        var len = +second.length,
	                            j = 0,
	                            i = first.length;

	                        while (j < len) {
	                            first[i++] = second[j++];
	                        }

	                        if (len !== len) {
	                            while (second[j] !== undefined) {
	                                first[i++] = second[j++];
	                            }
	                        }

	                        first.length = i;

	                        return first;
	                    })(ret, typeof arr === "string" ? [arr] : arr);
	                } else {
	                    [].push.call(ret, arr);
	                }
	            }

	            return ret;
	        }

	        if (!elem) {
	            return;
	        }

	        type = (type || "fx") + "queue";

	        var q = $.data(elem, type);

	        if (!data) {
	            return q || [];
	        }

	        if (!q || $.isArray(data)) {
	            q = $.data(elem, type, $makeArray(data));
	        } else {
	            q.push(data);
	        }

	        return q;
	    };

	    /* jQuery 1.4.3 */
	    $.dequeue = function (elems, type) {
	        /* Custom: Embed element iteration. */
	        $.each(elems.nodeType ? [ elems ] : elems, function(i, elem) {
	            type = type || "fx";

	            var queue = $.queue(elem, type),
	                fn = queue.shift();

	            if (fn === "inprogress") {
	                fn = queue.shift();
	            }

	            if (fn) {
	                if (type === "fx") {
	                    queue.unshift("inprogress");
	                }

	                fn.call(elem, function() {
	                    $.dequeue(elem, type);
	                });
	            }
	        });
	    };

	    /******************
	       $.fn Methods
	    ******************/

	    /* jQuery */
	    $.fn = $.prototype = {
	        init: function (selector) {
	            /* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
	            if (selector.nodeType) {
	                this[0] = selector;

	                return this;
	            } else {
	                throw new Error("Not a DOM node.");
	            }
	        },

	        offset: function () {
	            /* jQuery altered code: Dropped disconnected DOM node checking. */
	            var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };

	            return {
	                top: box.top + (window.pageYOffset || document.scrollTop  || 0)  - (document.clientTop  || 0),
	                left: box.left + (window.pageXOffset || document.scrollLeft  || 0) - (document.clientLeft || 0)
	            };
	        },

	        position: function () {
	            /* jQuery */
	            function offsetParent() {
	                var offsetParent = this.offsetParent || document;

	                while (offsetParent && (!offsetParent.nodeType.toLowerCase === "html" && offsetParent.style.position === "static")) {
	                    offsetParent = offsetParent.offsetParent;
	                }

	                return offsetParent || document;
	            }

	            /* Zepto */
	            var elem = this[0],
	                offsetParent = offsetParent.apply(elem),
	                offset = this.offset(),
	                parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? { top: 0, left: 0 } : $(offsetParent).offset()

	            offset.top -= parseFloat(elem.style.marginTop) || 0;
	            offset.left -= parseFloat(elem.style.marginLeft) || 0;

	            if (offsetParent.style) {
	                parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0
	                parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0
	            }

	            return {
	                top: offset.top - parentOffset.top,
	                left: offset.left - parentOffset.left
	            };
	        }
	    };

	    /**********************
	       Private Variables
	    **********************/

	    /* For $.data() */
	    var cache = {};
	    $.expando = "velocity" + (new Date().getTime());
	    $.uuid = 0;

	    /* For $.queue() */
	    var class2type = {},
	        hasOwn = class2type.hasOwnProperty,
	        toString = class2type.toString;

	    var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
	    for (var i = 0; i < types.length; i++) {
	        class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
	    }

	    /* Makes $(node) possible, without having to call init. */
	    $.fn.init.prototype = $.fn;

	    /* Globalize Velocity onto the window, and assign its Utilities property. */
	    window.Velocity = { Utilities: $ };
	})(window);

	/******************
	    Velocity.js
	******************/

	;(function (factory) {
	    /* CommonJS module. */
	    if (typeof module === "object" && typeof module.exports === "object") {
	        module.exports = factory();
	    /* AMD module. */
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    /* Browser globals. */
	    } else {
	        factory();
	    }
	}(function() {
	return function (global, window, document, undefined) {

	    /***************
	        Summary
	    ***************/

	    /*
	    - CSS: CSS stack that works independently from the rest of Velocity.
	    - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
	      - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
	      - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
	                  Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
	      - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
	    - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
	    - completeCall(): Handles the cleanup process for each Velocity call.
	    */

	    /*********************
	       Helper Functions
	    *********************/

	    /* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
	    var IE = (function() {
	        if (document.documentMode) {
	            return document.documentMode;
	        } else {
	            for (var i = 7; i > 4; i--) {
	                var div = document.createElement("div");

	                div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";

	                if (div.getElementsByTagName("span").length) {
	                    div = null;

	                    return i;
	                }
	            }
	        }

	        return undefined;
	    })();

	    /* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
	    var rAFShim = (function() {
	        var timeLast = 0;

	        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
	            var timeCurrent = (new Date()).getTime(),
	                timeDelta;

	            /* Dynamically set delay on a per-tick basis to match 60fps. */
	            /* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
	            timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
	            timeLast = timeCurrent + timeDelta;

	            return setTimeout(function() { callback(timeCurrent + timeDelta); }, timeDelta);
	        };
	    })();

	    /* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
	    function compactSparseArray (array) {
	        var index = -1,
	            length = array ? array.length : 0,
	            result = [];

	        while (++index < length) {
	            var value = array[index];

	            if (value) {
	                result.push(value);
	            }
	        }

	        return result;
	    }

	    function sanitizeElements (elements) {
	        /* Unwrap jQuery/Zepto objects. */
	        if (Type.isWrapped(elements)) {
	            elements = [].slice.call(elements);
	        /* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
	        } else if (Type.isNode(elements)) {
	            elements = [ elements ];
	        }

	        return elements;
	    }

	    var Type = {
	        isString: function (variable) {
	            return (typeof variable === "string");
	        },
	        isArray: Array.isArray || function (variable) {
	            return Object.prototype.toString.call(variable) === "[object Array]";
	        },
	        isFunction: function (variable) {
	            return Object.prototype.toString.call(variable) === "[object Function]";
	        },
	        isNode: function (variable) {
	            return variable && variable.nodeType;
	        },
	        /* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */
	        isNodeList: function (variable) {
	            return typeof variable === "object" &&
	                /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(variable)) &&
	                variable.length !== undefined &&
	                (variable.length === 0 || (typeof variable[0] === "object" && variable[0].nodeType > 0));
	        },
	        /* Determine if variable is a wrapped jQuery or Zepto element. */
	        isWrapped: function (variable) {
	            return variable && (variable.jquery || (window.Zepto && window.Zepto.zepto.isZ(variable)));
	        },
	        isSVG: function (variable) {
	            return window.SVGElement && (variable instanceof window.SVGElement);
	        },
	        isEmptyObject: function (variable) {
	            for (var name in variable) {
	                return false;
	            }

	            return true;
	        }
	    };

	    /*****************
	       Dependencies
	    *****************/

	    var $,
	        isJQuery = false;

	    if (global.fn && global.fn.jquery) {
	        $ = global;
	        isJQuery = true;
	    } else {
	        $ = window.Velocity.Utilities;
	    }

	    if (IE <= 8 && !isJQuery) {
	        throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
	    } else if (IE <= 7) {
	        /* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
	        jQuery.fn.velocity = jQuery.fn.animate;

	        /* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
	        return;
	    }

	    /*****************
	        Constants
	    *****************/

	    var DURATION_DEFAULT = 400,
	        EASING_DEFAULT = "swing";

	    /*************
	        State
	    *************/

	    var Velocity = {
	        /* Container for page-wide Velocity state data. */
	        State: {
	            /* Detect mobile devices to determine if mobileHA should be turned on. */
	            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
	            /* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
	            isAndroid: /Android/i.test(navigator.userAgent),
	            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
	            isChrome: window.chrome,
	            isFirefox: /Firefox/i.test(navigator.userAgent),
	            /* Create a cached element for re-use when checking for CSS property prefixes. */
	            prefixElement: document.createElement("div"),
	            /* Cache every prefix match to avoid repeating lookups. */
	            prefixMatches: {},
	            /* Cache the anchor used for animating window scrolling. */
	            scrollAnchor: null,
	            /* Cache the browser-specific property names associated with the scroll anchor. */
	            scrollPropertyLeft: null,
	            scrollPropertyTop: null,
	            /* Keep track of whether our RAF tick is running. */
	            isTicking: false,
	            /* Container for every in-progress call to Velocity. */
	            calls: []
	        },
	        /* Velocity's custom CSS stack. Made global for unit testing. */
	        CSS: { /* Defined below. */ },
	        /* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
	        Utilities: $,
	        /* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
	        Redirects: { /* Manually registered by the user. */ },
	        Easings: { /* Defined below. */ },
	        /* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
	        Promise: window.Promise,
	        /* Velocity option defaults, which can be overriden by the user. */
	        defaults: {
	            queue: "",
	            duration: DURATION_DEFAULT,
	            easing: EASING_DEFAULT,
	            begin: undefined,
	            complete: undefined,
	            progress: undefined,
	            display: undefined,
	            visibility: undefined,
	            loop: false,
	            delay: false,
	            mobileHA: true,
	            /* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
	            _cacheValues: true
	        },
	        /* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
	        init: function (element) {
	            $.data(element, "velocity", {
	                /* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
	                isSVG: Type.isSVG(element),
	                /* Keep track of whether the element is currently being animated by Velocity.
	                   This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
	                isAnimating: false,
	                /* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
	                computedStyle: null,
	                /* Tween data is cached for each animation on the element so that data can be passed across calls --
	                   in particular, end values are used as subsequent start values in consecutive Velocity calls. */
	                tweensContainer: null,
	                /* The full root property values of each CSS hook being animated on this element are cached so that:
	                   1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
	                   2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
	                rootPropertyValueCache: {},
	                /* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
	                transformCache: {}
	            });
	        },
	        /* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
	        hook: null, /* Defined below. */
	        /* Velocity-wide animation time remapping for testing purposes. */
	        mock: false,
	        version: { major: 1, minor: 2, patch: 2 },
	        /* Set to 1 or 2 (most verbose) to output debug info to console. */
	        debug: false
	    };

	    /* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
	    if (window.pageYOffset !== undefined) {
	        Velocity.State.scrollAnchor = window;
	        Velocity.State.scrollPropertyLeft = "pageXOffset";
	        Velocity.State.scrollPropertyTop = "pageYOffset";
	    } else {
	        Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
	        Velocity.State.scrollPropertyLeft = "scrollLeft";
	        Velocity.State.scrollPropertyTop = "scrollTop";
	    }

	    /* Shorthand alias for jQuery's $.data() utility. */
	    function Data (element) {
	        /* Hardcode a reference to the plugin name. */
	        var response = $.data(element, "velocity");

	        /* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
	        return response === null ? undefined : response;
	    };

	    /**************
	        Easing
	    **************/

	    /* Step easing generator. */
	    function generateStep (steps) {
	        return function (p) {
	            return Math.round(p * steps) * (1 / steps);
	        };
	    }

	    /* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
	    function generateBezier (mX1, mY1, mX2, mY2) {
	        var NEWTON_ITERATIONS = 4,
	            NEWTON_MIN_SLOPE = 0.001,
	            SUBDIVISION_PRECISION = 0.0000001,
	            SUBDIVISION_MAX_ITERATIONS = 10,
	            kSplineTableSize = 11,
	            kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
	            float32ArraySupported = "Float32Array" in window;

	        /* Must contain four arguments. */
	        if (arguments.length !== 4) {
	            return false;
	        }

	        /* Arguments must be numbers. */
	        for (var i = 0; i < 4; ++i) {
	            if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
	                return false;
	            }
	        }

	        /* X values must be in the [0, 1] range. */
	        mX1 = Math.min(mX1, 1);
	        mX2 = Math.min(mX2, 1);
	        mX1 = Math.max(mX1, 0);
	        mX2 = Math.max(mX2, 0);

	        var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

	        function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
	        function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
	        function C (aA1)      { return 3.0 * aA1; }

	        function calcBezier (aT, aA1, aA2) {
	            return ((A(aA1, aA2)*aT + B(aA1, aA2))*aT + C(aA1))*aT;
	        }

	        function getSlope (aT, aA1, aA2) {
	            return 3.0 * A(aA1, aA2)*aT*aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
	        }

	        function newtonRaphsonIterate (aX, aGuessT) {
	            for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
	                var currentSlope = getSlope(aGuessT, mX1, mX2);

	                if (currentSlope === 0.0) return aGuessT;

	                var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
	                aGuessT -= currentX / currentSlope;
	            }

	            return aGuessT;
	        }

	        function calcSampleValues () {
	            for (var i = 0; i < kSplineTableSize; ++i) {
	                mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
	            }
	        }

	        function binarySubdivide (aX, aA, aB) {
	            var currentX, currentT, i = 0;

	            do {
	                currentT = aA + (aB - aA) / 2.0;
	                currentX = calcBezier(currentT, mX1, mX2) - aX;
	                if (currentX > 0.0) {
	                  aB = currentT;
	                } else {
	                  aA = currentT;
	                }
	            } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

	            return currentT;
	        }

	        function getTForX (aX) {
	            var intervalStart = 0.0,
	                currentSample = 1,
	                lastSample = kSplineTableSize - 1;

	            for (; currentSample != lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
	                intervalStart += kSampleStepSize;
	            }

	            --currentSample;

	            var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample+1] - mSampleValues[currentSample]),
	                guessForT = intervalStart + dist * kSampleStepSize,
	                initialSlope = getSlope(guessForT, mX1, mX2);

	            if (initialSlope >= NEWTON_MIN_SLOPE) {
	                return newtonRaphsonIterate(aX, guessForT);
	            } else if (initialSlope == 0.0) {
	                return guessForT;
	            } else {
	                return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
	            }
	        }

	        var _precomputed = false;

	        function precompute() {
	            _precomputed = true;
	            if (mX1 != mY1 || mX2 != mY2) calcSampleValues();
	        }

	        var f = function (aX) {
	            if (!_precomputed) precompute();
	            if (mX1 === mY1 && mX2 === mY2) return aX;
	            if (aX === 0) return 0;
	            if (aX === 1) return 1;

	            return calcBezier(getTForX(aX), mY1, mY2);
	        };

	        f.getControlPoints = function() { return [{ x: mX1, y: mY1 }, { x: mX2, y: mY2 }]; };

	        var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
	        f.toString = function () { return str; };

	        return f;
	    }

	    /* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
	    /* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
	       then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
	    var generateSpringRK4 = (function () {
	        function springAccelerationForState (state) {
	            return (-state.tension * state.x) - (state.friction * state.v);
	        }

	        function springEvaluateStateWithDerivative (initialState, dt, derivative) {
	            var state = {
	                x: initialState.x + derivative.dx * dt,
	                v: initialState.v + derivative.dv * dt,
	                tension: initialState.tension,
	                friction: initialState.friction
	            };

	            return { dx: state.v, dv: springAccelerationForState(state) };
	        }

	        function springIntegrateState (state, dt) {
	            var a = {
	                    dx: state.v,
	                    dv: springAccelerationForState(state)
	                },
	                b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
	                c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
	                d = springEvaluateStateWithDerivative(state, dt, c),
	                dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
	                dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);

	            state.x = state.x + dxdt * dt;
	            state.v = state.v + dvdt * dt;

	            return state;
	        }

	        return function springRK4Factory (tension, friction, duration) {

	            var initState = {
	                    x: -1,
	                    v: 0,
	                    tension: null,
	                    friction: null
	                },
	                path = [0],
	                time_lapsed = 0,
	                tolerance = 1 / 10000,
	                DT = 16 / 1000,
	                have_duration, dt, last_state;

	            tension = parseFloat(tension) || 500;
	            friction = parseFloat(friction) || 20;
	            duration = duration || null;

	            initState.tension = tension;
	            initState.friction = friction;

	            have_duration = duration !== null;

	            /* Calculate the actual time it takes for this animation to complete with the provided conditions. */
	            if (have_duration) {
	                /* Run the simulation without a duration. */
	                time_lapsed = springRK4Factory(tension, friction);
	                /* Compute the adjusted time delta. */
	                dt = time_lapsed / duration * DT;
	            } else {
	                dt = DT;
	            }

	            while (true) {
	                /* Next/step function .*/
	                last_state = springIntegrateState(last_state || initState, dt);
	                /* Store the position. */
	                path.push(1 + last_state.x);
	                time_lapsed += 16;
	                /* If the change threshold is reached, break. */
	                if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
	                    break;
	                }
	            }

	            /* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
	               computed path and returns a snapshot of the position according to a given percentComplete. */
	            return !have_duration ? time_lapsed : function(percentComplete) { return path[ (percentComplete * (path.length - 1)) | 0 ]; };
	        };
	    }());

	    /* jQuery easings. */
	    Velocity.Easings = {
	        linear: function(p) { return p; },
	        swing: function(p) { return 0.5 - Math.cos( p * Math.PI ) / 2 },
	        /* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
	        spring: function(p) { return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6)); }
	    };

	    /* CSS3 and Robert Penner easings. */
	    $.each(
	        [
	            [ "ease", [ 0.25, 0.1, 0.25, 1.0 ] ],
	            [ "ease-in", [ 0.42, 0.0, 1.00, 1.0 ] ],
	            [ "ease-out", [ 0.00, 0.0, 0.58, 1.0 ] ],
	            [ "ease-in-out", [ 0.42, 0.0, 0.58, 1.0 ] ],
	            [ "easeInSine", [ 0.47, 0, 0.745, 0.715 ] ],
	            [ "easeOutSine", [ 0.39, 0.575, 0.565, 1 ] ],
	            [ "easeInOutSine", [ 0.445, 0.05, 0.55, 0.95 ] ],
	            [ "easeInQuad", [ 0.55, 0.085, 0.68, 0.53 ] ],
	            [ "easeOutQuad", [ 0.25, 0.46, 0.45, 0.94 ] ],
	            [ "easeInOutQuad", [ 0.455, 0.03, 0.515, 0.955 ] ],
	            [ "easeInCubic", [ 0.55, 0.055, 0.675, 0.19 ] ],
	            [ "easeOutCubic", [ 0.215, 0.61, 0.355, 1 ] ],
	            [ "easeInOutCubic", [ 0.645, 0.045, 0.355, 1 ] ],
	            [ "easeInQuart", [ 0.895, 0.03, 0.685, 0.22 ] ],
	            [ "easeOutQuart", [ 0.165, 0.84, 0.44, 1 ] ],
	            [ "easeInOutQuart", [ 0.77, 0, 0.175, 1 ] ],
	            [ "easeInQuint", [ 0.755, 0.05, 0.855, 0.06 ] ],
	            [ "easeOutQuint", [ 0.23, 1, 0.32, 1 ] ],
	            [ "easeInOutQuint", [ 0.86, 0, 0.07, 1 ] ],
	            [ "easeInExpo", [ 0.95, 0.05, 0.795, 0.035 ] ],
	            [ "easeOutExpo", [ 0.19, 1, 0.22, 1 ] ],
	            [ "easeInOutExpo", [ 1, 0, 0, 1 ] ],
	            [ "easeInCirc", [ 0.6, 0.04, 0.98, 0.335 ] ],
	            [ "easeOutCirc", [ 0.075, 0.82, 0.165, 1 ] ],
	            [ "easeInOutCirc", [ 0.785, 0.135, 0.15, 0.86 ] ]
	        ], function(i, easingArray) {
	            Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
	        });

	    /* Determine the appropriate easing type given an easing input. */
	    function getEasing(value, duration) {
	        var easing = value;

	        /* The easing option can either be a string that references a pre-registered easing,
	           or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
	        if (Type.isString(value)) {
	            /* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
	            if (!Velocity.Easings[value]) {
	                easing = false;
	            }
	        } else if (Type.isArray(value) && value.length === 1) {
	            easing = generateStep.apply(null, value);
	        } else if (Type.isArray(value) && value.length === 2) {
	            /* springRK4 must be passed the animation's duration. */
	            /* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
	               function generated with default tension and friction values. */
	            easing = generateSpringRK4.apply(null, value.concat([ duration ]));
	        } else if (Type.isArray(value) && value.length === 4) {
	            /* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
	            easing = generateBezier.apply(null, value);
	        } else {
	            easing = false;
	        }

	        /* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
	           if the Velocity-wide default has been incorrectly modified. */
	        if (easing === false) {
	            if (Velocity.Easings[Velocity.defaults.easing]) {
	                easing = Velocity.defaults.easing;
	            } else {
	                easing = EASING_DEFAULT;
	            }
	        }

	        return easing;
	    }

	    /*****************
	        CSS Stack
	    *****************/

	    /* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
	       It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
	    /* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
	    var CSS = Velocity.CSS = {

	        /*************
	            RegEx
	        *************/

	        RegEx: {
	            isHex: /^#([A-f\d]{3}){1,2}$/i,
	            /* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
	            valueUnwrap: /^[A-z]+\((.*)\)$/i,
	            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
	            /* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
	            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
	        },

	        /************
	            Lists
	        ************/

	        Lists: {
	            colors: [ "fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor" ],
	            transformsBase: [ "translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ" ],
	            transforms3D: [ "transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY" ]
	        },

	        /************
	            Hooks
	        ************/

	        /* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
	           (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
	        /* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
	           tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
	        Hooks: {
	            /********************
	                Registration
	            ********************/

	            /* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
	            /* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
	            templates: {
	                "textShadow": [ "Color X Y Blur", "black 0px 0px 0px" ],
	                "boxShadow": [ "Color X Y Blur Spread", "black 0px 0px 0px 0px" ],
	                "clip": [ "Top Right Bottom Left", "0px 0px 0px 0px" ],
	                "backgroundPosition": [ "X Y", "0% 0%" ],
	                "transformOrigin": [ "X Y Z", "50% 50% 0px" ],
	                "perspectiveOrigin": [ "X Y", "50% 50%" ]
	            },

	            /* A "registered" hook is one that has been converted from its template form into a live,
	               tweenable property. It contains data to associate it with its root property. */
	            registered: {
	                /* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
	                   which consists of the subproperty's name, the associated root property's name,
	                   and the subproperty's position in the root's value. */
	            },
	            /* Convert the templates into individual hooks then append them to the registered object above. */
	            register: function () {
	                /* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
	                   currently set to "transparent" default to their respective template below when color-animated,
	                   and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
	                   which is almost always set closer to black than white. */
	                for (var i = 0; i < CSS.Lists.colors.length; i++) {
	                    var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
	                    CSS.Hooks.templates[CSS.Lists.colors[i]] = [ "Red Green Blue Alpha", rgbComponents ];
	                }

	                var rootProperty,
	                    hookTemplate,
	                    hookNames;

	                /* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
	                   Thus, we re-arrange the templates accordingly. */
	                if (IE) {
	                    for (rootProperty in CSS.Hooks.templates) {
	                        hookTemplate = CSS.Hooks.templates[rootProperty];
	                        hookNames = hookTemplate[0].split(" ");

	                        var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);

	                        if (hookNames[0] === "Color") {
	                            /* Reposition both the hook's name and its default value to the end of their respective strings. */
	                            hookNames.push(hookNames.shift());
	                            defaultValues.push(defaultValues.shift());

	                            /* Replace the existing template for the hook's root property. */
	                            CSS.Hooks.templates[rootProperty] = [ hookNames.join(" "), defaultValues.join(" ") ];
	                        }
	                    }
	                }

	                /* Hook registration. */
	                for (rootProperty in CSS.Hooks.templates) {
	                    hookTemplate = CSS.Hooks.templates[rootProperty];
	                    hookNames = hookTemplate[0].split(" ");

	                    for (var i in hookNames) {
	                        var fullHookName = rootProperty + hookNames[i],
	                            hookPosition = i;

	                        /* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
	                           and the hook's position in its template's default value string. */
	                        CSS.Hooks.registered[fullHookName] = [ rootProperty, hookPosition ];
	                    }
	                }
	            },

	            /*****************************
	               Injection and Extraction
	            *****************************/

	            /* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
	            /* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
	            getRoot: function (property) {
	                var hookData = CSS.Hooks.registered[property];

	                if (hookData) {
	                    return hookData[0];
	                } else {
	                    /* If there was no hook match, return the property name untouched. */
	                    return property;
	                }
	            },
	            /* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
	               the targeted hook can be injected or extracted at its standard position. */
	            cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
	                /* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
	                if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
	                    rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
	                }

	                /* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
	                   default to the root's default value as defined in CSS.Hooks.templates. */
	                /* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
	                   zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
	                if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
	                    rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
	                }

	                return rootPropertyValue;
	            },
	            /* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
	            extractValue: function (fullHookName, rootPropertyValue) {
	                var hookData = CSS.Hooks.registered[fullHookName];

	                if (hookData) {
	                    var hookRoot = hookData[0],
	                        hookPosition = hookData[1];

	                    rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

	                    /* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
	                    return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
	                } else {
	                    /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
	                    return rootPropertyValue;
	                }
	            },
	            /* Inject the hook's value into its root property's value. This is used to piece back together the root property
	               once Velocity has updated one of its individually hooked values through tweening. */
	            injectValue: function (fullHookName, hookValue, rootPropertyValue) {
	                var hookData = CSS.Hooks.registered[fullHookName];

	                if (hookData) {
	                    var hookRoot = hookData[0],
	                        hookPosition = hookData[1],
	                        rootPropertyValueParts,
	                        rootPropertyValueUpdated;

	                    rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

	                    /* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
	                       then reconstruct the rootPropertyValue string. */
	                    rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
	                    rootPropertyValueParts[hookPosition] = hookValue;
	                    rootPropertyValueUpdated = rootPropertyValueParts.join(" ");

	                    return rootPropertyValueUpdated;
	                } else {
	                    /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
	                    return rootPropertyValue;
	                }
	            }
	        },

	        /*******************
	           Normalizations
	        *******************/

	        /* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
	           and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
	        Normalizations: {
	            /* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
	               the targeted element (which may need to be queried), and the targeted property value. */
	            registered: {
	                clip: function (type, element, propertyValue) {
	                    switch (type) {
	                        case "name":
	                            return "clip";
	                        /* Clip needs to be unwrapped and stripped of its commas during extraction. */
	                        case "extract":
	                            var extracted;

	                            /* If Velocity also extracted this value, skip extraction. */
	                            if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
	                                extracted = propertyValue;
	                            } else {
	                                /* Remove the "rect()" wrapper. */
	                                extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);

	                                /* Strip off commas. */
	                                extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
	                            }

	                            return extracted;
	                        /* Clip needs to be re-wrapped during injection. */
	                        case "inject":
	                            return "rect(" + propertyValue + ")";
	                    }
	                },

	                blur: function(type, element, propertyValue) {
	                    switch (type) {
	                        case "name":
	                            return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
	                        case "extract":
	                            var extracted = parseFloat(propertyValue);

	                            /* If extracted is NaN, meaning the value isn't already extracted. */
	                            if (!(extracted || extracted === 0)) {
	                                var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);

	                                /* If the filter string had a blur component, return just the blur value and unit type. */
	                                if (blurComponent) {
	                                    extracted = blurComponent[1];
	                                /* If the component doesn't exist, default blur to 0. */
	                                } else {
	                                    extracted = 0;
	                                }
	                            }

	                            return extracted;
	                        /* Blur needs to be re-wrapped during injection. */
	                        case "inject":
	                            /* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
	                            if (!parseFloat(propertyValue)) {
	                                return "none";
	                            } else {
	                                return "blur(" + propertyValue + ")";
	                            }
	                    }
	                },

	                /* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
	                opacity: function (type, element, propertyValue) {
	                    if (IE <= 8) {
	                        switch (type) {
	                            case "name":
	                                return "filter";
	                            case "extract":
	                                /* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
	                                   Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
	                                var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);

	                                if (extracted) {
	                                    /* Convert to decimal value. */
	                                    propertyValue = extracted[1] / 100;
	                                } else {
	                                    /* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
	                                    propertyValue = 1;
	                                }

	                                return propertyValue;
	                            case "inject":
	                                /* Opacified elements are required to have their zoom property set to a non-zero value. */
	                                element.style.zoom = 1;

	                                /* Setting the filter property on elements with certain font property combinations can result in a
	                                   highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
	                                   value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
	                                if (parseFloat(propertyValue) >= 1) {
	                                    return "";
	                                } else {
	                                  /* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
	                                  return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
	                                }
	                        }
	                    /* With all other browsers, normalization is not required; return the same values that were passed in. */
	                    } else {
	                        switch (type) {
	                            case "name":
	                                return "opacity";
	                            case "extract":
	                                return propertyValue;
	                            case "inject":
	                                return propertyValue;
	                        }
	                    }
	                }
	            },

	            /*****************************
	                Batched Registrations
	            *****************************/

	            /* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
	            register: function () {

	                /*****************
	                    Transforms
	                *****************/

	                /* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
	                   so that they can be referenced in a properties map by their individual names. */
	                /* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
	                   setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
	                   Transform setting is batched in this way to improve performance: the transform style only needs to be updated
	                   once when multiple transform subproperties are being animated simultaneously. */
	                /* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
	                   transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
	                   from being normalized for these browsers so that tweening skips these properties altogether
	                   (since it will ignore them as being unsupported by the browser.) */
	                if (!(IE <= 9) && !Velocity.State.isGingerbread) {
	                    /* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
	                    share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
	                    CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
	                }

	                for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
	                    /* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
	                    paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
	                    (function() {
	                        var transformName = CSS.Lists.transformsBase[i];

	                        CSS.Normalizations.registered[transformName] = function (type, element, propertyValue) {
	                            switch (type) {
	                                /* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
	                                case "name":
	                                    return "transform";
	                                /* Transform values are cached onto a per-element transformCache object. */
	                                case "extract":
	                                    /* If this transform has yet to be assigned a value, return its null value. */
	                                    if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
	                                        /* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
	                                        return /^scale/i.test(transformName) ? 1 : 0;
	                                    /* When transform values are set, they are wrapped in parentheses as per the CSS spec.
	                                       Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
	                                    } else {
	                                        return Data(element).transformCache[transformName].replace(/[()]/g, "");
	                                    }
	                                case "inject":
	                                    var invalid = false;

	                                    /* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
	                                       Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
	                                    /* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
	                                    switch (transformName.substr(0, transformName.length - 1)) {
	                                        /* Whitelist unit types for each transform. */
	                                        case "translate":
	                                            invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
	                                            break;
	                                        /* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
	                                        case "scal":
	                                        case "scale":
	                                            /* Chrome on Android has a bug in which scaled elements blur if their initial scale
	                                               value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
	                                               and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
	                                            if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
	                                                propertyValue = 1;
	                                            }

	                                            invalid = !/(\d)$/i.test(propertyValue);
	                                            break;
	                                        case "skew":
	                                            invalid = !/(deg|\d)$/i.test(propertyValue);
	                                            break;
	                                        case "rotate":
	                                            invalid = !/(deg|\d)$/i.test(propertyValue);
	                                            break;
	                                    }

	                                    if (!invalid) {
	                                        /* As per the CSS spec, wrap the value in parentheses. */
	                                        Data(element).transformCache[transformName] = "(" + propertyValue + ")";
	                                    }

	                                    /* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
	                                    return Data(element).transformCache[transformName];
	                            }
	                        };
	                    })();
	                }

	                /*************
	                    Colors
	                *************/

	                /* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
	                   Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
	                for (var i = 0; i < CSS.Lists.colors.length; i++) {
	                    /* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
	                       (Otherwise, all functions would take the final for loop's colorName.) */
	                    (function () {
	                        var colorName = CSS.Lists.colors[i];

	                        /* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
	                        CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
	                            switch (type) {
	                                case "name":
	                                    return colorName;
	                                /* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
	                                case "extract":
	                                    var extracted;

	                                    /* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
	                                    if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
	                                        extracted = propertyValue;
	                                    } else {
	                                        var converted,
	                                            colorNames = {
	                                                black: "rgb(0, 0, 0)",
	                                                blue: "rgb(0, 0, 255)",
	                                                gray: "rgb(128, 128, 128)",
	                                                green: "rgb(0, 128, 0)",
	                                                red: "rgb(255, 0, 0)",
	                                                white: "rgb(255, 255, 255)"
	                                            };

	                                        /* Convert color names to rgb. */
	                                        if (/^[A-z]+$/i.test(propertyValue)) {
	                                            if (colorNames[propertyValue] !== undefined) {
	                                                converted = colorNames[propertyValue]
	                                            } else {
	                                                /* If an unmatched color name is provided, default to black. */
	                                                converted = colorNames.black;
	                                            }
	                                        /* Convert hex values to rgb. */
	                                        } else if (CSS.RegEx.isHex.test(propertyValue)) {
	                                            converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
	                                        /* If the provided color doesn't match any of the accepted color formats, default to black. */
	                                        } else if (!(/^rgba?\(/i.test(propertyValue))) {
	                                            converted = colorNames.black;
	                                        }

	                                        /* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
	                                           repeated spaces (in case the value included spaces to begin with). */
	                                        extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
	                                    }

	                                    /* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
	                                    if (!(IE <= 8) && extracted.split(" ").length === 3) {
	                                        extracted += " 1";
	                                    }

	                                    return extracted;
	                                case "inject":
	                                    /* If this is IE<=8 and an alpha component exists, strip it off. */
	                                    if (IE <= 8) {
	                                        if (propertyValue.split(" ").length === 4) {
	                                            propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
	                                        }
	                                    /* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
	                                    } else if (propertyValue.split(" ").length === 3) {
	                                        propertyValue += " 1";
	                                    }

	                                    /* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
	                                       on all values but the fourth (R, G, and B only accept whole numbers). */
	                                    return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
	                            }
	                        };
	                    })();
	                }
	            }
	        },

	        /************************
	           CSS Property Names
	        ************************/

	        Names: {
	            /* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
	               Camelcasing is used to normalize property names between and across calls. */
	            camelCase: function (property) {
	                return property.replace(/-(\w)/g, function (match, subMatch) {
	                    return subMatch.toUpperCase();
	                });
	            },

	            /* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
	            SVGAttribute: function (property) {
	                var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";

	                /* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
	                if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
	                    SVGAttributes += "|transform";
	                }

	                return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
	            },

	            /* Determine whether a property should be set with a vendor prefix. */
	            /* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
	               If the property is not at all supported by the browser, return a false flag. */
	            prefixCheck: function (property) {
	                /* If this property has already been checked, return the cached value. */
	                if (Velocity.State.prefixMatches[property]) {
	                    return [ Velocity.State.prefixMatches[property], true ];
	                } else {
	                    var vendors = [ "", "Webkit", "Moz", "ms", "O" ];

	                    for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
	                        var propertyPrefixed;

	                        if (i === 0) {
	                            propertyPrefixed = property;
	                        } else {
	                            /* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
	                            propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) { return match.toUpperCase(); });
	                        }

	                        /* Check if the browser supports this property as prefixed. */
	                        if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
	                            /* Cache the match. */
	                            Velocity.State.prefixMatches[property] = propertyPrefixed;

	                            return [ propertyPrefixed, true ];
	                        }
	                    }

	                    /* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
	                    return [ property, false ];
	                }
	            }
	        },

	        /************************
	           CSS Property Values
	        ************************/

	        Values: {
	            /* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
	            hexToRgb: function (hex) {
	                var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
	                    longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
	                    rgbParts;

	                hex = hex.replace(shortformRegex, function (m, r, g, b) {
	                    return r + r + g + g + b + b;
	                });

	                rgbParts = longformRegex.exec(hex);

	                return rgbParts ? [ parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16) ] : [ 0, 0, 0 ];
	            },

	            isCSSNullValue: function (value) {
	                /* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
	                   Thus, we check for both falsiness and these special strings. */
	                /* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
	                   templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
	                /* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
	                return (value == 0 || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
	            },

	            /* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
	            getUnitType: function (property) {
	                if (/^(rotate|skew)/i.test(property)) {
	                    return "deg";
	                } else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
	                    /* The above properties are unitless. */
	                    return "";
	                } else {
	                    /* Default to px for all other properties. */
	                    return "px";
	                }
	            },

	            /* HTML elements default to an associated display type when they're not set to display:none. */
	            /* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
	            getDisplayType: function (element) {
	                var tagName = element && element.tagName.toString().toLowerCase();

	                if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
	                    return "inline";
	                } else if (/^(li)$/i.test(tagName)) {
	                    return "list-item";
	                } else if (/^(tr)$/i.test(tagName)) {
	                    return "table-row";
	                } else if (/^(table)$/i.test(tagName)) {
	                    return "table";
	                } else if (/^(tbody)$/i.test(tagName)) {
	                    return "table-row-group";
	                /* Default to "block" when no match is found. */
	                } else {
	                    return "block";
	                }
	            },

	            /* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
	            addClass: function (element, className) {
	                if (element.classList) {
	                    element.classList.add(className);
	                } else {
	                    element.className += (element.className.length ? " " : "") + className;
	                }
	            },

	            removeClass: function (element, className) {
	                if (element.classList) {
	                    element.classList.remove(className);
	                } else {
	                    element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
	                }
	            }
	        },

	        /****************************
	           Style Getting & Setting
	        ****************************/

	        /* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
	        getPropertyValue: function (element, property, rootPropertyValue, forceStyleLookup) {
	            /* Get an element's computed property value. */
	            /* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
	               style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
	               *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
	            function computePropertyValue (element, property) {
	                /* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
	                   element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
	                   offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
	                   We subtract border and padding to get the sum of interior + scrollbar. */
	                var computedValue = 0;

	                /* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
	                   of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
	                   codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
	                   Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
	                if (IE <= 8) {
	                    computedValue = $.css(element, property); /* GET */
	                /* All other browsers support getComputedStyle. The returned live object reference is cached onto its
	                   associated element so that it does not need to be refetched upon every GET. */
	                } else {
	                    /* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
	                       toggle display to the element type's default value. */
	                    var toggleDisplay = false;

	                    if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
	                        toggleDisplay = true;
	                        CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
	                    }

	                    function revertDisplay () {
	                        if (toggleDisplay) {
	                            CSS.setPropertyValue(element, "display", "none");
	                        }
	                    }

	                    if (!forceStyleLookup) {
	                        if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
	                            var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
	                            revertDisplay();

	                            return contentBoxHeight;
	                        } else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
	                            var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
	                            revertDisplay();

	                            return contentBoxWidth;
	                        }
	                    }

	                    var computedStyle;

	                    /* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
	                       of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
	                    if (Data(element) === undefined) {
	                        computedStyle = window.getComputedStyle(element, null); /* GET */
	                    /* If the computedStyle object has yet to be cached, do so now. */
	                    } else if (!Data(element).computedStyle) {
	                        computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
	                    /* If computedStyle is cached, use it. */
	                    } else {
	                        computedStyle = Data(element).computedStyle;
	                    }

	                    /* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
	                       Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
	                       So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
	                    if (property === "borderColor") {
	                        property = "borderTopColor";
	                    }

	                    /* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
	                       instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
	                    if (IE === 9 && property === "filter") {
	                        computedValue = computedStyle.getPropertyValue(property); /* GET */
	                    } else {
	                        computedValue = computedStyle[property];
	                    }

	                    /* Fall back to the property's style value (if defined) when computedValue returns nothing,
	                       which can happen when the element hasn't been painted. */
	                    if (computedValue === "" || computedValue === null) {
	                        computedValue = element.style[property];
	                    }

	                    revertDisplay();
	                }

	                /* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
	                   defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
	                   effect as being set to 0, so no conversion is necessary.) */
	                /* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
	                   property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
	                   to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
	                if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
	                    var position = computePropertyValue(element, "position"); /* GET */

	                    /* For absolute positioning, jQuery's $.position() only returns values for top and left;
	                       right and bottom will have their "auto" value reverted to 0. */
	                    /* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
	                       Not a big deal since we're currently in a GET batch anyway. */
	                    if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
	                        /* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
	                        computedValue = $(element).position()[property] + "px"; /* GET */
	                    }
	                }

	                return computedValue;
	            }

	            var propertyValue;

	            /* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
	               extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
	            if (CSS.Hooks.registered[property]) {
	                var hook = property,
	                    hookRoot = CSS.Hooks.getRoot(hook);

	                /* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
	                   query the DOM for the root property's value. */
	                if (rootPropertyValue === undefined) {
	                    /* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
	                    rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
	                }

	                /* If this root has a normalization registered, peform the associated normalization extraction. */
	                if (CSS.Normalizations.registered[hookRoot]) {
	                    rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
	                }

	                /* Extract the hook's value. */
	                propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);

	            /* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
	               normalize the property's name and value, and handle the special case of transforms. */
	            /* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
	               numerical and therefore do not require normalization extraction. */
	            } else if (CSS.Normalizations.registered[property]) {
	                var normalizedPropertyName,
	                    normalizedPropertyValue;

	                normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);

	                /* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
	                   At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
	                   This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
	                   thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
	                if (normalizedPropertyName !== "transform") {
	                    normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */

	                    /* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
	                    if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
	                        normalizedPropertyValue = CSS.Hooks.templates[property][1];
	                    }
	                }

	                propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
	            }

	            /* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
	            if (!/^[\d-]/.test(propertyValue)) {
	                /* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
	                   their HTML attribute values instead of their CSS style values. */
	                if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {
	                    /* Since the height/width attribute values must be set manually, they don't reflect computed values.
	                       Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
	                    if (/^(height|width)$/i.test(property)) {
	                        /* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
	                        try {
	                            propertyValue = element.getBBox()[property];
	                        } catch (error) {
	                            propertyValue = 0;
	                        }
	                    /* Otherwise, access the attribute value directly. */
	                    } else {
	                        propertyValue = element.getAttribute(property);
	                    }
	                } else {
	                    propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
	                }
	            }

	            /* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
	               convert CSS null-values to an integer of value 0. */
	            if (CSS.Values.isCSSNullValue(propertyValue)) {
	                propertyValue = 0;
	            }

	            if (Velocity.debug >= 2) console.log("Get " + property + ": " + propertyValue);

	            return propertyValue;
	        },

	        /* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
	        setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
	            var propertyName = property;

	            /* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
	            if (property === "scroll") {
	                /* If a container option is present, scroll the container instead of the browser window. */
	                if (scrollData.container) {
	                    scrollData.container["scroll" + scrollData.direction] = propertyValue;
	                /* Otherwise, Velocity defaults to scrolling the browser window. */
	                } else {
	                    if (scrollData.direction === "Left") {
	                        window.scrollTo(propertyValue, scrollData.alternateValue);
	                    } else {
	                        window.scrollTo(scrollData.alternateValue, propertyValue);
	                    }
	                }
	            } else {
	                /* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
	                   Thus, for now, we merely cache transforms being SET. */
	                if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
	                    /* Perform a normalization injection. */
	                    /* Note: The normalization logic handles the transformCache updating. */
	                    CSS.Normalizations.registered[property]("inject", element, propertyValue);

	                    propertyName = "transform";
	                    propertyValue = Data(element).transformCache[property];
	                } else {
	                    /* Inject hooks. */
	                    if (CSS.Hooks.registered[property]) {
	                        var hookName = property,
	                            hookRoot = CSS.Hooks.getRoot(property);

	                        /* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
	                        rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */

	                        propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
	                        property = hookRoot;
	                    }

	                    /* Normalize names and values. */
	                    if (CSS.Normalizations.registered[property]) {
	                        propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
	                        property = CSS.Normalizations.registered[property]("name", element);
	                    }

	                    /* Assign the appropriate vendor prefix before performing an official style update. */
	                    propertyName = CSS.Names.prefixCheck(property)[0];

	                    /* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
	                       Try/catch is avoided for other browsers since it incurs a performance overhead. */
	                    if (IE <= 8) {
	                        try {
	                            element.style[propertyName] = propertyValue;
	                        } catch (error) { if (Velocity.debug) console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]"); }
	                    /* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
	                    /* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
	                    } else if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {
	                        /* Note: For SVG attributes, vendor-prefixed property names are never used. */
	                        /* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
	                        element.setAttribute(property, propertyValue);
	                    } else {
	                        element.style[propertyName] = propertyValue;
	                    }

	                    if (Velocity.debug >= 2) console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
	                }
	            }

	            /* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
	            return [ propertyName, propertyValue ];
	        },

	        /* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
	        /* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
	        flushTransformCache: function(element) {
	            var transformString = "";

	            /* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
	               (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
	            if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && Data(element).isSVG) {
	                /* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
	                   Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
	                function getTransformFloat (transformProperty) {
	                    return parseFloat(CSS.getPropertyValue(element, transformProperty));
	                }

	                /* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
	                   we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
	                var SVGTransforms = {
	                    translate: [ getTransformFloat("translateX"), getTransformFloat("translateY") ],
	                    skewX: [ getTransformFloat("skewX") ], skewY: [ getTransformFloat("skewY") ],
	                    /* If the scale property is set (non-1), use that value for the scaleX and scaleY values
	                       (this behavior mimics the result of animating all these properties at once on HTML elements). */
	                    scale: getTransformFloat("scale") !== 1 ? [ getTransformFloat("scale"), getTransformFloat("scale") ] : [ getTransformFloat("scaleX"), getTransformFloat("scaleY") ],
	                    /* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
	                       defining the rotation's origin point. We ignore the origin values (default them to 0). */
	                    rotate: [ getTransformFloat("rotateZ"), 0, 0 ]
	                };

	                /* Iterate through the transform properties in the user-defined property map order.
	                   (This mimics the behavior of non-SVG transform animation.) */
	                $.each(Data(element).transformCache, function(transformName) {
	                    /* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
	                       properties so that they match up with SVG's accepted transform properties. */
	                    if (/^translate/i.test(transformName)) {
	                        transformName = "translate";
	                    } else if (/^scale/i.test(transformName)) {
	                        transformName = "scale";
	                    } else if (/^rotate/i.test(transformName)) {
	                        transformName = "rotate";
	                    }

	                    /* Check that we haven't yet deleted the property from the SVGTransforms container. */
	                    if (SVGTransforms[transformName]) {
	                        /* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
	                        transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";

	                        /* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
	                           re-insert the same master property if we encounter another one of its axis-specific properties. */
	                        delete SVGTransforms[transformName];
	                    }
	                });
	            } else {
	                var transformValue,
	                    perspective;

	                /* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
	                $.each(Data(element).transformCache, function(transformName) {
	                    transformValue = Data(element).transformCache[transformName];

	                    /* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
	                    if (transformName === "transformPerspective") {
	                        perspective = transformValue;
	                        return true;
	                    }

	                    /* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
	                    if (IE === 9 && transformName === "rotateZ") {
	                        transformName = "rotate";
	                    }

	                    transformString += transformName + transformValue + " ";
	                });

	                /* If present, set the perspective subproperty first. */
	                if (perspective) {
	                    transformString = "perspective" + perspective + " " + transformString;
	                }
	            }

	            CSS.setPropertyValue(element, "transform", transformString);
	        }
	    };

	    /* Register hooks and normalizations. */
	    CSS.Hooks.register();
	    CSS.Normalizations.register();

	    /* Allow hook setting in the same fashion as jQuery's $.css(). */
	    Velocity.hook = function (elements, arg2, arg3) {
	        var value = undefined;

	        elements = sanitizeElements(elements);

	        $.each(elements, function(i, element) {
	            /* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
	            if (Data(element) === undefined) {
	                Velocity.init(element);
	            }

	            /* Get property value. If an element set was passed in, only return the value for the first element. */
	            if (arg3 === undefined) {
	                if (value === undefined) {
	                    value = Velocity.CSS.getPropertyValue(element, arg2);
	                }
	            /* Set property value. */
	            } else {
	                /* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
	                var adjustedSet = Velocity.CSS.setPropertyValue(element, arg2, arg3);

	                /* Transform properties don't automatically set. They have to be flushed to the DOM. */
	                if (adjustedSet[0] === "transform") {
	                    Velocity.CSS.flushTransformCache(element);
	                }

	                value = adjustedSet;
	            }
	        });

	        return value;
	    };

	    /*****************
	        Animation
	    *****************/

	    var animate = function() {

	        /******************
	            Call Chain
	        ******************/

	        /* Logic for determining what to return to the call stack when exiting out of Velocity. */
	        function getChain () {
	            /* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
	               default to null instead of returning the targeted elements so that utility function's return value is standardized. */
	            if (isUtility) {
	                return promiseData.promise || null;
	            /* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
	            } else {
	                return elementsWrapped;
	            }
	        }

	        /*************************
	           Arguments Assignment
	        *************************/

	        /* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
	           objects are defined on a container object that's passed in as Velocity's sole argument. */
	        /* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
	        var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
	            /* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
	            isUtility,
	            /* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
	               passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
	            elementsWrapped,
	            argumentIndex;

	        var elements,
	            propertiesMap,
	            options;

	        /* Detect jQuery/Zepto elements being animated via the $.fn method. */
	        if (Type.isWrapped(this)) {
	            isUtility = false;

	            argumentIndex = 0;
	            elements = this;
	            elementsWrapped = this;
	        /* Otherwise, raw elements are being animated via the utility function. */
	        } else {
	            isUtility = true;

	            argumentIndex = 1;
	            elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
	        }

	        elements = sanitizeElements(elements);

	        if (!elements) {
	            return;
	        }

	        if (syntacticSugar) {
	            propertiesMap = arguments[0].properties || arguments[0].p;
	            options = arguments[0].options || arguments[0].o;
	        } else {
	            propertiesMap = arguments[argumentIndex];
	            options = arguments[argumentIndex + 1];
	        }

	        /* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
	           single raw DOM element is passed in (which doesn't contain a length property). */
	        var elementsLength = elements.length,
	            elementsIndex = 0;

	        /***************************
	            Argument Overloading
	        ***************************/

	        /* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
	           Overloading is detected by checking for the absence of an object being passed into options. */
	        /* Note: The stop and finish actions do not accept animation options, and are therefore excluded from this check. */
	        if (!/^(stop|finish|finishAll)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
	            /* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
	            var startingArgumentPosition = argumentIndex + 1;

	            options = {};

	            /* Iterate through all options arguments */
	            for (var i = startingArgumentPosition; i < arguments.length; i++) {
	                /* Treat a number as a duration. Parse it out. */
	                /* Note: The following RegEx will return true if passed an array with a number as its first item.
	                   Thus, arrays are skipped from this check. */
	                if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
	                    options.duration = arguments[i];
	                /* Treat strings and arrays as easings. */
	                } else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
	                    options.easing = arguments[i];
	                /* Treat a function as a complete callback. */
	                } else if (Type.isFunction(arguments[i])) {
	                    options.complete = arguments[i];
	                }
	            }
	        }

	        /***************
	            Promises
	        ***************/

	        var promiseData = {
	                promise: null,
	                resolver: null,
	                rejecter: null
	            };

	        /* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
	           promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
	           method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
	           call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
	        /* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
	           triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
	           grouped together for the purposes of resolving and rejecting a promise. */
	        if (isUtility && Velocity.Promise) {
	            promiseData.promise = new Velocity.Promise(function (resolve, reject) {
	                promiseData.resolver = resolve;
	                promiseData.rejecter = reject;
	            });
	        }

	        /*********************
	           Action Detection
	        *********************/

	        /* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
	           or they can be started, stopped, or reversed. If a literal or referenced properties map is passed in as Velocity's
	           first argument, the associated action is "start". Alternatively, "scroll", "reverse", or "stop" can be passed in instead of a properties map. */
	        var action;

	        switch (propertiesMap) {
	            case "scroll":
	                action = "scroll";
	                break;

	            case "reverse":
	                action = "reverse";
	                break;

	            case "finish":
	            case "finishAll":
	            case "stop":
	                /*******************
	                    Action: Stop
	                *******************/

	                /* Clear the currently-active delay on each targeted element. */
	                $.each(elements, function(i, element) {
	                    if (Data(element) && Data(element).delayTimer) {
	                        /* Stop the timer from triggering its cached next() function. */
	                        clearTimeout(Data(element).delayTimer.setTimeout);

	                        /* Manually call the next() function so that the subsequent queue items can progress. */
	                        if (Data(element).delayTimer.next) {
	                            Data(element).delayTimer.next();
	                        }

	                        delete Data(element).delayTimer;
	                    }

	                    /* If we want to finish everything in the queue, we have to iterate through it
	                       and call each function. This will make them active calls below, which will
	                       cause them to be applied via the duration setting. */
	                    if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
	                        /* Iterate through the items in the element's queue. */
	                        $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
	                            /* The queue array can contain an "inprogress" string, which we skip. */
	                            if (Type.isFunction(item)) {
	                                item();
	                            }
	                        });

	                        /* Clearing the $.queue() array is achieved by resetting it to []. */
	                        $.queue(element, Type.isString(options) ? options : "", []);
	                    }
	                });

	                var callsToStop = [];

	                /* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
	                   been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
	                   is stopped, the next item in its animation queue is immediately triggered. */
	                /* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
	                   or a custom queue string can be passed in. */
	                /* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
	                   regardless of the element's current queue state. */

	                /* Iterate through every active call. */
	                $.each(Velocity.State.calls, function(i, activeCall) {
	                    /* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
	                    if (activeCall) {
	                        /* Iterate through the active call's targeted elements. */
	                        $.each(activeCall[1], function(k, activeElement) {
	                            /* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
	                               clear calls associated with the relevant queue. */
	                            /* Call stopping logic works as follows:
	                               - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
	                               - options === undefined --> stop current queue:"" call and all queue:false calls.
	                               - options === false --> stop only queue:false calls.
	                               - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
	                            var queueName = (options === undefined) ? "" : options;

	                            if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
	                                return true;
	                            }

	                            /* Iterate through the calls targeted by the stop command. */
	                            $.each(elements, function(l, element) {
	                                /* Check that this call was applied to the target element. */
	                                if (element === activeElement) {
	                                    /* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
	                                       due to the queue-clearing above. */
	                                    if (options === true || Type.isString(options)) {
	                                        /* Iterate through the items in the element's queue. */
	                                        $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
	                                            /* The queue array can contain an "inprogress" string, which we skip. */
	                                            if (Type.isFunction(item)) {
	                                                /* Pass the item's callback a flag indicating that we want to abort from the queue call.
	                                                   (Specifically, the queue will resolve the call's associated promise then abort.)  */
	                                                item(null, true);
	                                            }
	                                        });

	                                        /* Clearing the $.queue() array is achieved by resetting it to []. */
	                                        $.queue(element, Type.isString(options) ? options : "", []);
	                                    }

	                                    if (propertiesMap === "stop") {
	                                        /* Since "reverse" uses cached start values (the previous call's endValues), these values must be
	                                           changed to reflect the final value that the elements were actually tweened to. */
	                                        /* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
	                                           object. Also, queue:false animations can't be reversed. */
	                                        if (Data(element) && Data(element).tweensContainer && queueName !== false) {
	                                            $.each(Data(element).tweensContainer, function(m, activeTween) {
	                                                activeTween.endValue = activeTween.currentValue;
	                                            });
	                                        }

	                                        callsToStop.push(i);
	                                    } else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
	                                        /* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
	                                        they finish upon the next rAf tick then proceed with normal call completion logic. */
	                                        activeCall[2].duration = 1;
	                                    }
	                                }
	                            });
	                        });
	                    }
	                });

	                /* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
	                   that the complete callback and display:none setting should be skipped since we're completing prematurely. */
	                if (propertiesMap === "stop") {
	                    $.each(callsToStop, function(i, j) {
	                        completeCall(j, true);
	                    });

	                    if (promiseData.promise) {
	                        /* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
	                        promiseData.resolver(elements);
	                    }
	                }

	                /* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
	                return getChain();

	            default:
	                /* Treat a non-empty plain object as a literal properties map. */
	                if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
	                    action = "start";

	                /****************
	                    Redirects
	                ****************/

	                /* Check if a string matches a registered redirect (see Redirects above). */
	                } else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
	                    var opts = $.extend({}, options),
	                        durationOriginal = opts.duration,
	                        delayOriginal = opts.delay || 0;

	                    /* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
	                    if (opts.backwards === true) {
	                        elements = $.extend(true, [], elements).reverse();
	                    }

	                    /* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
	                    $.each(elements, function(elementIndex, element) {
	                        /* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
	                        if (parseFloat(opts.stagger)) {
	                            opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
	                        } else if (Type.isFunction(opts.stagger)) {
	                            opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
	                        }

	                        /* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
	                           the duration of each element's animation, using floors to prevent producing very short durations. */
	                        if (opts.drag) {
	                            /* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
	                            opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);

	                            /* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
	                               B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
	                               The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
	                            opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex/elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
	                        }

	                        /* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
	                           reduce the opts checking logic required inside the redirect. */
	                        Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
	                    });

	                    /* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
	                       (The performance overhead up to this point is virtually non-existant.) */
	                    /* Note: The jQuery call chain is kept intact by returning the complete element set. */
	                    return getChain();
	                } else {
	                    var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";

	                    if (promiseData.promise) {
	                        promiseData.rejecter(new Error(abortError));
	                    } else {
	                        console.log(abortError);
	                    }

	                    return getChain();
	                }
	        }

	        /**************************
	            Call-Wide Variables
	        **************************/

	        /* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
	           being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
	           avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
	           conversion metrics across Velocity animations that are not immediately consecutively chained. */
	        var callUnitConversionData = {
	                lastParent: null,
	                lastPosition: null,
	                lastFontSize: null,
	                lastPercentToPxWidth: null,
	                lastPercentToPxHeight: null,
	                lastEmToPx: null,
	                remToPx: null,
	                vwToPx: null,
	                vhToPx: null
	            };

	        /* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
	           Velocity.State.calls array that is processed during animation ticking. */
	        var call = [];

	        /************************
	           Element Processing
	        ************************/

	        /* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
	           1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
	           2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
	           3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
	        */

	        function processElement () {

	            /*************************
	               Part I: Pre-Queueing
	            *************************/

	            /***************************
	               Element-Wide Variables
	            ***************************/

	            var element = this,
	                /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
	                opts = $.extend({}, Velocity.defaults, options),
	                /* A container for the processed data associated with each property in the propertyMap.
	                   (Each property in the map produces its own "tween".) */
	                tweensContainer = {},
	                elementUnitConversionData;

	            /******************
	               Element Init
	            ******************/

	            if (Data(element) === undefined) {
	                Velocity.init(element);
	            }

	            /******************
	               Option: Delay
	            ******************/

	            /* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
	            /* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
	               (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
	            if (parseFloat(opts.delay) && opts.queue !== false) {
	                $.queue(element, opts.queue, function(next) {
	                    /* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
	                    Velocity.velocityQueueEntryFlag = true;

	                    /* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
	                       The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command. */
	                    Data(element).delayTimer = {
	                        setTimeout: setTimeout(next, parseFloat(opts.delay)),
	                        next: next
	                    };
	                });
	            }

	            /*********************
	               Option: Duration
	            *********************/

	            /* Support for jQuery's named durations. */
	            switch (opts.duration.toString().toLowerCase()) {
	                case "fast":
	                    opts.duration = 200;
	                    break;

	                case "normal":
	                    opts.duration = DURATION_DEFAULT;
	                    break;

	                case "slow":
	                    opts.duration = 600;
	                    break;

	                default:
	                    /* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
	                    opts.duration = parseFloat(opts.duration) || 1;
	            }

	            /************************
	               Global Option: Mock
	            ************************/

	            if (Velocity.mock !== false) {
	                /* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
	                   Alternatively, a multiplier can be passed in to time remap all delays and durations. */
	                if (Velocity.mock === true) {
	                    opts.duration = opts.delay = 1;
	                } else {
	                    opts.duration *= parseFloat(Velocity.mock) || 1;
	                    opts.delay *= parseFloat(Velocity.mock) || 1;
	                }
	            }

	            /*******************
	               Option: Easing
	            *******************/

	            opts.easing = getEasing(opts.easing, opts.duration);

	            /**********************
	               Option: Callbacks
	            **********************/

	            /* Callbacks must functions. Otherwise, default to null. */
	            if (opts.begin && !Type.isFunction(opts.begin)) {
	                opts.begin = null;
	            }

	            if (opts.progress && !Type.isFunction(opts.progress)) {
	                opts.progress = null;
	            }

	            if (opts.complete && !Type.isFunction(opts.complete)) {
	                opts.complete = null;
	            }

	            /*********************************
	               Option: Display & Visibility
	            *********************************/

	            /* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
	            /* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
	            if (opts.display !== undefined && opts.display !== null) {
	                opts.display = opts.display.toString().toLowerCase();

	                /* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
	                if (opts.display === "auto") {
	                    opts.display = Velocity.CSS.Values.getDisplayType(element);
	                }
	            }

	            if (opts.visibility !== undefined && opts.visibility !== null) {
	                opts.visibility = opts.visibility.toString().toLowerCase();
	            }

	            /**********************
	               Option: mobileHA
	            **********************/

	            /* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
	               on animating elements. HA is removed from the element at the completion of its animation. */
	            /* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
	            /* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
	            opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);

	            /***********************
	               Part II: Queueing
	            ***********************/

	            /* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
	               In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
	            /* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
	               the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
	            function buildQueue (next) {

	                /*******************
	                   Option: Begin
	                *******************/

	                /* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
	                if (opts.begin && elementsIndex === 0) {
	                    /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
	                    try {
	                        opts.begin.call(elements, elements);
	                    } catch (error) {
	                        setTimeout(function() { throw error; }, 1);
	                    }
	                }

	                /*****************************************
	                   Tween Data Construction (for Scroll)
	                *****************************************/

	                /* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
	                if (action === "scroll") {
	                    /* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
	                    var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
	                        scrollOffset = parseFloat(opts.offset) || 0,
	                        scrollPositionCurrent,
	                        scrollPositionCurrentAlternate,
	                        scrollPositionEnd;

	                    /* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
	                       as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
	                    if (opts.container) {
	                        /* Ensure that either a jQuery object or a raw DOM element was passed in. */
	                        if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
	                            /* Extract the raw DOM element from the jQuery wrapper. */
	                            opts.container = opts.container[0] || opts.container;
	                            /* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
	                               (due to the user's natural interaction with the page). */
	                            scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */

	                            /* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
	                               -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
	                               the scroll container's current scroll position. */
	                            scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
	                        /* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
	                        } else {
	                            opts.container = null;
	                        }
	                    } else {
	                        /* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
	                           the appropriate cached property names (which differ based on browser type). */
	                        scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
	                        /* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
	                        scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */

	                        /* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
	                           and therefore end values do not need to be compounded onto current values. */
	                        scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
	                    }

	                    /* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
	                    tweensContainer = {
	                        scroll: {
	                            rootPropertyValue: false,
	                            startValue: scrollPositionCurrent,
	                            currentValue: scrollPositionCurrent,
	                            endValue: scrollPositionEnd,
	                            unitType: "",
	                            easing: opts.easing,
	                            scrollData: {
	                                container: opts.container,
	                                direction: scrollDirection,
	                                alternateValue: scrollPositionCurrentAlternate
	                            }
	                        },
	                        element: element
	                    };

	                    if (Velocity.debug) console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);

	                /******************************************
	                   Tween Data Construction (for Reverse)
	                ******************************************/

	                /* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
	                   that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
	                   the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
	                /* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
	                /* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
	                   there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
	                   as reverting to the element's values as they were prior to the previous *Velocity* call. */
	                } else if (action === "reverse") {
	                    /* Abort if there is no prior animation data to reverse to. */
	                    if (!Data(element).tweensContainer) {
	                        /* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
	                        $.dequeue(element, opts.queue);

	                        return;
	                    } else {
	                        /*********************
	                           Options Parsing
	                        *********************/

	                        /* If the element was hidden via the display option in the previous call,
	                           revert display to "auto" prior to reversal so that the element is visible again. */
	                        if (Data(element).opts.display === "none") {
	                            Data(element).opts.display = "auto";
	                        }

	                        if (Data(element).opts.visibility === "hidden") {
	                            Data(element).opts.visibility = "visible";
	                        }

	                        /* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
	                           Further, remove the previous call's callback options; typically, users do not want these to be refired. */
	                        Data(element).opts.loop = false;
	                        Data(element).opts.begin = null;
	                        Data(element).opts.complete = null;

	                        /* Since we're extending an opts object that has already been extended with the defaults options object,
	                           we remove non-explicitly-defined properties that are auto-assigned values. */
	                        if (!options.easing) {
	                            delete opts.easing;
	                        }

	                        if (!options.duration) {
	                            delete opts.duration;
	                        }

	                        /* The opts object used for reversal is an extension of the options object optionally passed into this
	                           reverse call plus the options used in the previous Velocity call. */
	                        opts = $.extend({}, Data(element).opts, opts);

	                        /*************************************
	                           Tweens Container Reconstruction
	                        *************************************/

	                        /* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
	                        var lastTweensContainer = $.extend(true, {}, Data(element).tweensContainer);

	                        /* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
	                        for (var lastTween in lastTweensContainer) {
	                            /* In addition to tween data, tweensContainers contain an element property that we ignore here. */
	                            if (lastTween !== "element") {
	                                var lastStartValue = lastTweensContainer[lastTween].startValue;

	                                lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
	                                lastTweensContainer[lastTween].endValue = lastStartValue;

	                                /* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
	                                   Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
	                                   The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
	                                if (!Type.isEmptyObject(options)) {
	                                    lastTweensContainer[lastTween].easing = opts.easing;
	                                }

	                                if (Velocity.debug) console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
	                            }
	                        }

	                        tweensContainer = lastTweensContainer;
	                    }

	                /*****************************************
	                   Tween Data Construction (for Start)
	                *****************************************/

	                } else if (action === "start") {

	                    /*************************
	                        Value Transferring
	                    *************************/

	                    /* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
	                       while the element was in the process of being animated by Velocity, then this current call is safe to use
	                       the end values from the prior call as its start values. Velocity attempts to perform this value transfer
	                       process whenever possible in order to avoid requerying the DOM. */
	                    /* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
	                       then the DOM is queried for the element's current values as a last resort. */
	                    /* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */
	                    var lastTweensContainer;

	                    /* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
	                       to transfer over end values to use as start values. If it's set to true and there is a previous
	                       Velocity call to pull values from, do so. */
	                    if (Data(element).tweensContainer && Data(element).isAnimating === true) {
	                        lastTweensContainer = Data(element).tweensContainer;
	                    }

	                    /***************************
	                       Tween Data Calculation
	                    ***************************/

	                    /* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
	                    /* Property map values can either take the form of 1) a single value representing the end value,
	                       or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
	                       The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
	                       the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
	                    function parsePropertyValue (valueData, skipResolvingEasing) {
	                        var endValue = undefined,
	                            easing = undefined,
	                            startValue = undefined;

	                        /* Handle the array format, which can be structured as one of three potential overloads:
	                           A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
	                        if (Type.isArray(valueData)) {
	                            /* endValue is always the first item in the array. Don't bother validating endValue's value now
	                               since the ensuing property cycling logic does that. */
	                            endValue = valueData[0];

	                            /* Two-item array format: If the second item is a number, function, or hex string, treat it as a
	                               start value since easings can only be non-hex strings or arrays. */
	                            if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
	                                startValue = valueData[1];
	                            /* Two or three-item array: If the second item is a non-hex string or an array, treat it as an easing. */
	                            } else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1])) || Type.isArray(valueData[1])) {
	                                easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);

	                                /* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
	                                if (valueData[2] !== undefined) {
	                                    startValue = valueData[2];
	                                }
	                            }
	                        /* Handle the single-value format. */
	                        } else {
	                            endValue = valueData;
	                        }

	                        /* Default to the call's easing if a per-property easing type was not defined. */
	                        if (!skipResolvingEasing) {
	                            easing = easing || opts.easing;
	                        }

	                        /* If functions were passed in as values, pass the function the current element as its context,
	                           plus the element's index and the element set's size as arguments. Then, assign the returned value. */
	                        if (Type.isFunction(endValue)) {
	                            endValue = endValue.call(element, elementsIndex, elementsLength);
	                        }

	                        if (Type.isFunction(startValue)) {
	                            startValue = startValue.call(element, elementsIndex, elementsLength);
	                        }

	                        /* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
	                        return [ endValue || 0, easing, startValue ];
	                    }

	                    /* Cycle through each property in the map, looking for shorthand color properties (e.g. "color" as opposed to "colorRed"). Inject the corresponding
	                       colorRed, colorGreen, and colorBlue RGB component tweens into the propertiesMap (which Velocity understands) and remove the shorthand property. */
	                    $.each(propertiesMap, function(property, value) {
	                        /* Find shorthand color properties that have been passed a hex string. */
	                        if (RegExp("^" + CSS.Lists.colors.join("$|^") + "$").test(property)) {
	                            /* Parse the value data for each shorthand. */
	                            var valueData = parsePropertyValue(value, true),
	                                endValue = valueData[0],
	                                easing = valueData[1],
	                                startValue = valueData[2];

	                            if (CSS.RegEx.isHex.test(endValue)) {
	                                /* Convert the hex strings into their RGB component arrays. */
	                                var colorComponents = [ "Red", "Green", "Blue" ],
	                                    endValueRGB = CSS.Values.hexToRgb(endValue),
	                                    startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;

	                                /* Inject the RGB component tweens into propertiesMap. */
	                                for (var i = 0; i < colorComponents.length; i++) {
	                                    var dataArray = [ endValueRGB[i] ];

	                                    if (easing) {
	                                        dataArray.push(easing);
	                                    }

	                                    if (startValueRGB !== undefined) {
	                                        dataArray.push(startValueRGB[i]);
	                                    }

	                                    propertiesMap[property + colorComponents[i]] = dataArray;
	                                }

	                                /* Remove the intermediary shorthand property entry now that we've processed it. */
	                                delete propertiesMap[property];
	                            }
	                        }
	                    });

	                    /* Create a tween out of each property, and append its associated data to tweensContainer. */
	                    for (var property in propertiesMap) {

	                        /**************************
	                           Start Value Sourcing
	                        **************************/

	                        /* Parse out endValue, easing, and startValue from the property's data. */
	                        var valueData = parsePropertyValue(propertiesMap[property]),
	                            endValue = valueData[0],
	                            easing = valueData[1],
	                            startValue = valueData[2];

	                        /* Now that the original property name's format has been used for the parsePropertyValue() lookup above,
	                           we force the property to its camelCase styling to normalize it for manipulation. */
	                        property = CSS.Names.camelCase(property);

	                        /* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
	                        var rootProperty = CSS.Hooks.getRoot(property),
	                            rootPropertyValue = false;

	                        /* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
	                           inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
	                           Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
	                        /* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
	                           there is no way to check for their explicit browser support, and so we skip skip this check for them. */
	                        if (!Data(element).isSVG && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
	                            if (Velocity.debug) console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");

	                            continue;
	                        }

	                        /* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
	                           animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
	                           a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
	                        if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
	                            startValue = 0;
	                        }

	                        /* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
	                           for all of the current call's properties that were *also* animated in the previous call. */
	                        /* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
	                        if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
	                            if (startValue === undefined) {
	                                startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
	                            }

	                            /* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
	                               instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
	                               attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
	                            rootPropertyValue = Data(element).rootPropertyValueCache[rootProperty];
	                        /* If values were not transferred from a previous Velocity call, query the DOM as needed. */
	                        } else {
	                            /* Handle hooked properties. */
	                            if (CSS.Hooks.registered[property]) {
	                               if (startValue === undefined) {
	                                    rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
	                                    /* Note: The following getPropertyValue() call does not actually trigger a DOM query;
	                                       getPropertyValue() will extract the hook from rootPropertyValue. */
	                                    startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
	                                /* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
	                                   just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
	                                   root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
	                                   to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
	                                } else {
	                                    /* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
	                                    rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
	                                }
	                            /* Handle non-hooked properties that haven't already been defined via forcefeeding. */
	                            } else if (startValue === undefined) {
	                                startValue = CSS.getPropertyValue(element, property); /* GET */
	                            }
	                        }

	                        /**************************
	                           Value Data Extraction
	                        **************************/

	                        var separatedValue,
	                            endValueUnitType,
	                            startValueUnitType,
	                            operator = false;

	                        /* Separates a property value into its numeric value and its unit type. */
	                        function separateValue (property, value) {
	                            var unitType,
	                                numericValue;

	                            numericValue = (value || "0")
	                                .toString()
	                                .toLowerCase()
	                                /* Match the unit type at the end of the value. */
	                                .replace(/[%A-z]+$/, function(match) {
	                                    /* Grab the unit type. */
	                                    unitType = match;

	                                    /* Strip the unit type off of value. */
	                                    return "";
	                                });

	                            /* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
	                            if (!unitType) {
	                                unitType = CSS.Values.getUnitType(property);
	                            }

	                            return [ numericValue, unitType ];
	                        }

	                        /* Separate startValue. */
	                        separatedValue = separateValue(property, startValue);
	                        startValue = separatedValue[0];
	                        startValueUnitType = separatedValue[1];

	                        /* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
	                        separatedValue = separateValue(property, endValue);
	                        endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
	                            operator = subMatch;

	                            /* Strip the operator off of the value. */
	                            return "";
	                        });
	                        endValueUnitType = separatedValue[1];

	                        /* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
	                        startValue = parseFloat(startValue) || 0;
	                        endValue = parseFloat(endValue) || 0;

	                        /***************************************
	                           Property-Specific Value Conversion
	                        ***************************************/

	                        /* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
	                        if (endValueUnitType === "%") {
	                            /* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
	                               which is identical to the em unit's behavior, so we piggyback off of that. */
	                            if (/^(fontSize|lineHeight)$/.test(property)) {
	                                /* Convert % into an em decimal value. */
	                                endValue = endValue / 100;
	                                endValueUnitType = "em";
	                            /* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
	                            } else if (/^scale/.test(property)) {
	                                endValue = endValue / 100;
	                                endValueUnitType = "";
	                            /* For RGB components, take the defined percentage of 255 and strip off the unit type. */
	                            } else if (/(Red|Green|Blue)$/i.test(property)) {
	                                endValue = (endValue / 100) * 255;
	                                endValueUnitType = "";
	                            }
	                        }

	                        /***************************
	                           Unit Ratio Calculation
	                        ***************************/

	                        /* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
	                           %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
	                           for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
	                           from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
	                           1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
	                           2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
	                        /* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
	                           setting values with the target unit type then comparing the returned pixel value. */
	                        /* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
	                           of batching the SETs and GETs together upfront outweights the potential overhead
	                           of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
	                        /* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
	                        function calculateUnitRatios () {

	                            /************************
	                                Same Ratio Checks
	                            ************************/

	                            /* The properties below are used to determine whether the element differs sufficiently from this call's
	                               previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
	                               of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
	                               this is done to minimize DOM querying. */
	                            var sameRatioIndicators = {
	                                    myParent: element.parentNode || document.body, /* GET */
	                                    position: CSS.getPropertyValue(element, "position"), /* GET */
	                                    fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
	                                },
	                                /* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
	                                samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
	                                /* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
	                                sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);

	                            /* Store these ratio indicators call-wide for the next element to compare against. */
	                            callUnitConversionData.lastParent = sameRatioIndicators.myParent;
	                            callUnitConversionData.lastPosition = sameRatioIndicators.position;
	                            callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;

	                            /***************************
	                               Element-Specific Units
	                            ***************************/

	                            /* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
	                               of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
	                            var measurement = 100,
	                                unitRatios = {};

	                            if (!sameEmRatio || !samePercentRatio) {
	                                var dummy = Data(element).isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");

	                                Velocity.init(dummy);
	                                sameRatioIndicators.myParent.appendChild(dummy);

	                                /* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
	                                   Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
	                                /* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
	                                $.each([ "overflow", "overflowX", "overflowY" ], function(i, property) {
	                                    Velocity.CSS.setPropertyValue(dummy, property, "hidden");
	                                });
	                                Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
	                                Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
	                                Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");

	                                /* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
	                                $.each([ "minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height" ], function(i, property) {
	                                    Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
	                                });
	                                /* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
	                                Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");

	                                /* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
	                                unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
	                                unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
	                                unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */

	                                sameRatioIndicators.myParent.removeChild(dummy);
	                            } else {
	                                unitRatios.emToPx = callUnitConversionData.lastEmToPx;
	                                unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
	                                unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
	                            }

	                            /***************************
	                               Element-Agnostic Units
	                            ***************************/

	                            /* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
	                               once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
	                               that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
	                               so we calculate it now. */
	                            if (callUnitConversionData.remToPx === null) {
	                                /* Default to browsers' default fontSize of 16px in the case of 0. */
	                                callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
	                            }

	                            /* Similarly, viewport units are %-relative to the window's inner dimensions. */
	                            if (callUnitConversionData.vwToPx === null) {
	                                callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
	                                callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
	                            }

	                            unitRatios.remToPx = callUnitConversionData.remToPx;
	                            unitRatios.vwToPx = callUnitConversionData.vwToPx;
	                            unitRatios.vhToPx = callUnitConversionData.vhToPx;

	                            if (Velocity.debug >= 1) console.log("Unit ratios: " + JSON.stringify(unitRatios), element);

	                            return unitRatios;
	                        }

	                        /********************
	                           Unit Conversion
	                        ********************/

	                        /* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
	                        if (/[\/*]/.test(operator)) {
	                            endValueUnitType = startValueUnitType;
	                        /* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
	                           is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
	                           on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
	                           would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
	                        /* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
	                        } else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
	                            /* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
	                            /* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
	                               match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
	                               which remains past the point of the animation's completion. */
	                            if (endValue === 0) {
	                                endValueUnitType = startValueUnitType;
	                            } else {
	                                /* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
	                                   If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
	                                elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();

	                                /* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
	                                /* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
	                                var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";

	                                /* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
	                                   1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
	                                switch (startValueUnitType) {
	                                    case "%":
	                                        /* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
	                                           Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
	                                           to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
	                                        startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
	                                        break;

	                                    case "px":
	                                        /* px acts as our midpoint in the unit conversion process; do nothing. */
	                                        break;

	                                    default:
	                                        startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
	                                }

	                                /* Invert the px ratios to convert into to the target unit. */
	                                switch (endValueUnitType) {
	                                    case "%":
	                                        startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
	                                        break;

	                                    case "px":
	                                        /* startValue is already in px, do nothing; we're done. */
	                                        break;

	                                    default:
	                                        startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
	                                }
	                            }
	                        }

	                        /*********************
	                           Relative Values
	                        *********************/

	                        /* Operator logic must be performed last since it requires unit-normalized start and end values. */
	                        /* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
	                           to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
	                           50 points is added on top of the current % value. */
	                        switch (operator) {
	                            case "+":
	                                endValue = startValue + endValue;
	                                break;

	                            case "-":
	                                endValue = startValue - endValue;
	                                break;

	                            case "*":
	                                endValue = startValue * endValue;
	                                break;

	                            case "/":
	                                endValue = startValue / endValue;
	                                break;
	                        }

	                        /**************************
	                           tweensContainer Push
	                        **************************/

	                        /* Construct the per-property tween object, and push it to the element's tweensContainer. */
	                        tweensContainer[property] = {
	                            rootPropertyValue: rootPropertyValue,
	                            startValue: startValue,
	                            currentValue: startValue,
	                            endValue: endValue,
	                            unitType: endValueUnitType,
	                            easing: easing
	                        };

	                        if (Velocity.debug) console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
	                    }

	                    /* Along with its property data, store a reference to the element itself onto tweensContainer. */
	                    tweensContainer.element = element;
	                }

	                /*****************
	                    Call Push
	                *****************/

	                /* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
	                   being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
	                if (tweensContainer.element) {
	                    /* Apply the "velocity-animating" indicator class. */
	                    CSS.Values.addClass(element, "velocity-animating");

	                    /* The call array houses the tweensContainers for each element being animated in the current call. */
	                    call.push(tweensContainer);

	                    /* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
	                    if (opts.queue === "") {
	                        Data(element).tweensContainer = tweensContainer;
	                        Data(element).opts = opts;
	                    }

	                    /* Switch on the element's animating flag. */
	                    Data(element).isAnimating = true;

	                    /* Once the final element in this call's element set has been processed, push the call array onto
	                       Velocity.State.calls for the animation tick to immediately begin processing. */
	                    if (elementsIndex === elementsLength - 1) {
	                        /* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
	                           Anything on this call container is subjected to tick() processing. */
	                        Velocity.State.calls.push([ call, elements, opts, null, promiseData.resolver ]);

	                        /* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
	                        if (Velocity.State.isTicking === false) {
	                            Velocity.State.isTicking = true;

	                            /* Start the tick loop. */
	                            tick();
	                        }
	                    } else {
	                        elementsIndex++;
	                    }
	                }
	            }

	            /* When the queue option is set to false, the call skips the element's queue and fires immediately. */
	            if (opts.queue === false) {
	                /* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
	                   we manually inject the delay property here with an explicit setTimeout. */
	                if (opts.delay) {
	                    setTimeout(buildQueue, opts.delay);
	                } else {
	                    buildQueue();
	                }
	            /* Otherwise, the call undergoes element queueing as normal. */
	            /* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
	            } else {
	                $.queue(element, opts.queue, function(next, clearQueue) {
	                    /* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
	                       so it's fine if this is repeatedly triggered for each element in the associated call.) */
	                    if (clearQueue === true) {
	                        if (promiseData.promise) {
	                            promiseData.resolver(elements);
	                        }

	                        /* Do not continue with animation queueing. */
	                        return true;
	                    }

	                    /* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
	                       See completeCall() for further details. */
	                    Velocity.velocityQueueEntryFlag = true;

	                    buildQueue(next);
	                });
	            }

	            /*********************
	                Auto-Dequeuing
	            *********************/

	            /* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
	               must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
	               for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
	               queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
	               first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
	            /* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
	               each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
	            /* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
	               Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
	            if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
	                $.dequeue(element);
	            }
	        }

	        /**************************
	           Element Set Iteration
	        **************************/

	        /* If the "nodeType" property exists on the elements variable, we're animating a single element.
	           Place it in an array so that $.each() can iterate over it. */
	        $.each(elements, function(i, element) {
	            /* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
	            if (Type.isNode(element)) {
	                processElement.call(element);
	            }
	        });

	        /******************
	           Option: Loop
	        ******************/

	        /* The loop option accepts an integer indicating how many times the element should loop between the values in the
	           current call's properties map and the element's property values prior to this call. */
	        /* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
	           to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
	           which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
	        var opts = $.extend({}, Velocity.defaults, options),
	            reverseCallsCount;

	        opts.loop = parseInt(opts.loop);
	        reverseCallsCount = (opts.loop * 2) - 1;

	        if (opts.loop) {
	            /* Double the loop count to convert it into its appropriate number of "reverse" calls.
	               Subtract 1 from the resulting value since the current call is included in the total alternation count. */
	            for (var x = 0; x < reverseCallsCount; x++) {
	                /* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
	                   isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
	                   call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
	                var reverseOptions = {
	                    delay: opts.delay,
	                    progress: opts.progress
	                };

	                /* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
	                   so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
	                if (x === reverseCallsCount - 1) {
	                    reverseOptions.display = opts.display;
	                    reverseOptions.visibility = opts.visibility;
	                    reverseOptions.complete = opts.complete;
	                }

	                animate(elements, "reverse", reverseOptions);
	            }
	        }

	        /***************
	            Chaining
	        ***************/

	        /* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
	        return getChain();
	    };

	    /* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
	    Velocity = $.extend(animate, Velocity);
	    /* For legacy support, also expose the literal animate method. */
	    Velocity.animate = animate;

	    /**************
	        Timing
	    **************/

	    /* Ticker function. */
	    var ticker = window.requestAnimationFrame || rAFShim;

	    /* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
	       To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
	       devices to avoid wasting battery power on inactive tabs. */
	    /* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
	    if (!Velocity.State.isMobile && document.hidden !== undefined) {
	        document.addEventListener("visibilitychange", function() {
	            /* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
	            if (document.hidden) {
	                ticker = function(callback) {
	                    /* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
	                    return setTimeout(function() { callback(true) }, 16);
	                };

	                /* The rAF loop has been paused by the browser, so we manually restart the tick. */
	                tick();
	            } else {
	                ticker = window.requestAnimationFrame || rAFShim;
	            }
	        });
	    }

	    /************
	        Tick
	    ************/

	    /* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
	    function tick (timestamp) {
	        /* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
	           We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
	           the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
	           calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
	           the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
	           by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
	        if (timestamp) {
	            /* We ignore RAF's high resolution timestamp since it can be significantly offset when the browser is
	               under high stress; we opt for choppiness over allowing the browser to drop huge chunks of frames. */
	            var timeCurrent = (new Date).getTime();

	            /********************
	               Call Iteration
	            ********************/

	            var callsLength = Velocity.State.calls.length;

	            /* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
	               when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
	               has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
	            if (callsLength > 10000) {
	                Velocity.State.calls = compactSparseArray(Velocity.State.calls);
	            }

	            /* Iterate through each active call. */
	            for (var i = 0; i < callsLength; i++) {
	                /* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
	                if (!Velocity.State.calls[i]) {
	                    continue;
	                }

	                /************************
	                   Call-Wide Variables
	                ************************/

	                var callContainer = Velocity.State.calls[i],
	                    call = callContainer[0],
	                    opts = callContainer[2],
	                    timeStart = callContainer[3],
	                    firstTick = !!timeStart,
	                    tweenDummyValue = null;

	                /* If timeStart is undefined, then this is the first time that this call has been processed by tick().
	                   We assign timeStart now so that its value is as close to the real animation start time as possible.
	                   (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
	                   between that time and now would cause the first few frames of the tween to be skipped since
	                   percentComplete is calculated relative to timeStart.) */
	                /* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
	                   first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
	                   same style value as the element's current value. */
	                if (!timeStart) {
	                    timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
	                }

	                /* The tween's completion percentage is relative to the tween's start time, not the tween's start value
	                   (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
	                   Accordingly, we ensure that percentComplete does not exceed 1. */
	                var percentComplete = Math.min((timeCurrent - timeStart) / opts.duration, 1);

	                /**********************
	                   Element Iteration
	                **********************/

	                /* For every call, iterate through each of the elements in its set. */
	                for (var j = 0, callLength = call.length; j < callLength; j++) {
	                    var tweensContainer = call[j],
	                        element = tweensContainer.element;

	                    /* Check to see if this element has been deleted midway through the animation by checking for the
	                       continued existence of its data cache. If it's gone, skip animating this element. */
	                    if (!Data(element)) {
	                        continue;
	                    }

	                    var transformPropertyExists = false;

	                    /**********************************
	                       Display & Visibility Toggling
	                    **********************************/

	                    /* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
	                       (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
	                    if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
	                        if (opts.display === "flex") {
	                            var flexValues = [ "-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex" ];

	                            $.each(flexValues, function(i, flexValue) {
	                                CSS.setPropertyValue(element, "display", flexValue);
	                            });
	                        }

	                        CSS.setPropertyValue(element, "display", opts.display);
	                    }

	                    /* Same goes with the visibility option, but its "none" equivalent is "hidden". */
	                    if (opts.visibility !== undefined && opts.visibility !== "hidden") {
	                        CSS.setPropertyValue(element, "visibility", opts.visibility);
	                    }

	                    /************************
	                       Property Iteration
	                    ************************/

	                    /* For every element, iterate through each property. */
	                    for (var property in tweensContainer) {
	                        /* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
	                        if (property !== "element") {
	                            var tween = tweensContainer[property],
	                                currentValue,
	                                /* Easing can either be a pre-genereated function or a string that references a pre-registered easing
	                                   on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
	                                easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;

	                            /******************************
	                               Current Value Calculation
	                            ******************************/

	                            /* If this is the last tick pass (if we've reached 100% completion for this tween),
	                               ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
	                            if (percentComplete === 1) {
	                                currentValue = tween.endValue;
	                            /* Otherwise, calculate currentValue based on the current delta from startValue. */
	                            } else {
	                                var tweenDelta = tween.endValue - tween.startValue;
	                                currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));

	                                /* If no value change is occurring, don't proceed with DOM updating. */
	                                if (!firstTick && (currentValue === tween.currentValue)) {
	                                    continue;
	                                }
	                            }

	                            tween.currentValue = currentValue;

	                            /* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
	                               it can be passed into the progress callback. */
	                            if (property === "tween") {
	                                tweenDummyValue = currentValue;
	                            } else {
	                                /******************
	                                   Hooks: Part I
	                                ******************/

	                                /* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
	                                   for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
	                                   rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
	                                   updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
	                                   subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
	                                if (CSS.Hooks.registered[property]) {
	                                    var hookRoot = CSS.Hooks.getRoot(property),
	                                        rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];

	                                    if (rootPropertyValueCache) {
	                                        tween.rootPropertyValue = rootPropertyValueCache;
	                                    }
	                                }

	                                /*****************
	                                    DOM Update
	                                *****************/

	                                /* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
	                                /* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
	                                var adjustedSetData = CSS.setPropertyValue(element, /* SET */
	                                                                           property,
	                                                                           tween.currentValue + (parseFloat(currentValue) === 0 ? "" : tween.unitType),
	                                                                           tween.rootPropertyValue,
	                                                                           tween.scrollData);

	                                /*******************
	                                   Hooks: Part II
	                                *******************/

	                                /* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
	                                if (CSS.Hooks.registered[property]) {
	                                    /* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
	                                    if (CSS.Normalizations.registered[hookRoot]) {
	                                        Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
	                                    } else {
	                                        Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
	                                    }
	                                }

	                                /***************
	                                   Transforms
	                                ***************/

	                                /* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
	                                if (adjustedSetData[0] === "transform") {
	                                    transformPropertyExists = true;
	                                }

	                            }
	                        }
	                    }

	                    /****************
	                        mobileHA
	                    ****************/

	                    /* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
	                       It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
	                    if (opts.mobileHA) {
	                        /* Don't set the null transform hack if we've already done so. */
	                        if (Data(element).transformCache.translate3d === undefined) {
	                            /* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
	                            Data(element).transformCache.translate3d = "(0px, 0px, 0px)";

	                            transformPropertyExists = true;
	                        }
	                    }

	                    if (transformPropertyExists) {
	                        CSS.flushTransformCache(element);
	                    }
	                }

	                /* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
	                   Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
	                if (opts.display !== undefined && opts.display !== "none") {
	                    Velocity.State.calls[i][2].display = false;
	                }
	                if (opts.visibility !== undefined && opts.visibility !== "hidden") {
	                    Velocity.State.calls[i][2].visibility = false;
	                }

	                /* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
	                if (opts.progress) {
	                    opts.progress.call(callContainer[1],
	                                       callContainer[1],
	                                       percentComplete,
	                                       Math.max(0, (timeStart + opts.duration) - timeCurrent),
	                                       timeStart,
	                                       tweenDummyValue);
	                }

	                /* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
	                if (percentComplete === 1) {
	                    completeCall(i);
	                }
	            }
	        }

	        /* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
	        if (Velocity.State.isTicking) {
	            ticker(tick);
	        }
	    }

	    /**********************
	        Call Completion
	    **********************/

	    /* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
	    function completeCall (callIndex, isStopped) {
	        /* Ensure the call exists. */
	        if (!Velocity.State.calls[callIndex]) {
	            return false;
	        }

	        /* Pull the metadata from the call. */
	        var call = Velocity.State.calls[callIndex][0],
	            elements = Velocity.State.calls[callIndex][1],
	            opts = Velocity.State.calls[callIndex][2],
	            resolver = Velocity.State.calls[callIndex][4];

	        var remainingCallsExist = false;

	        /*************************
	           Element Finalization
	        *************************/

	        for (var i = 0, callLength = call.length; i < callLength; i++) {
	            var element = call[i].element;

	            /* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
	            /* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
	            /* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
	            if (!isStopped && !opts.loop) {
	                if (opts.display === "none") {
	                    CSS.setPropertyValue(element, "display", opts.display);
	                }

	                if (opts.visibility === "hidden") {
	                    CSS.setPropertyValue(element, "visibility", opts.visibility);
	                }
	            }

	            /* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
	               a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
	               an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
	               we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
	               is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
	            if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
	                /* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
	                if (Data(element)) {
	                    Data(element).isAnimating = false;
	                    /* Clear the element's rootPropertyValueCache, which will become stale. */
	                    Data(element).rootPropertyValueCache = {};

	                    var transformHAPropertyExists = false;
	                    /* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
	                    $.each(CSS.Lists.transforms3D, function(i, transformName) {
	                        var defaultValue = /^scale/.test(transformName) ? 1 : 0,
	                            currentValue = Data(element).transformCache[transformName];

	                        if (Data(element).transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
	                            transformHAPropertyExists = true;

	                            delete Data(element).transformCache[transformName];
	                        }
	                    });

	                    /* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
	                    if (opts.mobileHA) {
	                        transformHAPropertyExists = true;
	                        delete Data(element).transformCache.translate3d;
	                    }

	                    /* Flush the subproperty removals to the DOM. */
	                    if (transformHAPropertyExists) {
	                        CSS.flushTransformCache(element);
	                    }

	                    /* Remove the "velocity-animating" indicator class. */
	                    CSS.Values.removeClass(element, "velocity-animating");
	                }
	            }

	            /*********************
	               Option: Complete
	            *********************/

	            /* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
	            /* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
	            if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
	                /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
	                try {
	                    opts.complete.call(elements, elements);
	                } catch (error) {
	                    setTimeout(function() { throw error; }, 1);
	                }
	            }

	            /**********************
	               Promise Resolving
	            **********************/

	            /* Note: Infinite loops don't return promises. */
	            if (resolver && opts.loop !== true) {
	                resolver(elements);
	            }

	            /****************************
	               Option: Loop (Infinite)
	            ****************************/

	            if (Data(element) && opts.loop === true && !isStopped) {
	                /* If a rotateX/Y/Z property is being animated to 360 deg with loop:true, swap tween start/end values to enable
	                   continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
	                $.each(Data(element).tweensContainer, function(propertyName, tweenContainer) {
	                    if (/^rotate/.test(propertyName) && parseFloat(tweenContainer.endValue) === 360) {
	                        tweenContainer.endValue = 0;
	                        tweenContainer.startValue = 360;
	                    }

	                    if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
	                        tweenContainer.endValue = 0;
	                        tweenContainer.startValue = 100;
	                    }
	                });

	                Velocity(element, "reverse", { loop: true, delay: opts.delay });
	            }

	            /***************
	               Dequeueing
	            ***************/

	            /* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
	               which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
	               $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
	            if (opts.queue !== false) {
	                $.dequeue(element, opts.queue);
	            }
	        }

	        /************************
	           Calls Array Cleanup
	        ************************/

	        /* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
	          (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
	        Velocity.State.calls[callIndex] = false;

	        /* Iterate through the calls array to determine if this was the final in-progress animation.
	           If so, set a flag to end ticking and clear the calls array. */
	        for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
	            if (Velocity.State.calls[j] !== false) {
	                remainingCallsExist = true;

	                break;
	            }
	        }

	        if (remainingCallsExist === false) {
	            /* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
	            Velocity.State.isTicking = false;

	            /* Clear the calls array so that its length is reset. */
	            delete Velocity.State.calls;
	            Velocity.State.calls = [];
	        }
	    }

	    /******************
	        Frameworks
	    ******************/

	    /* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
	       If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
	       also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
	       accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
	       (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
	    global.Velocity = Velocity;

	    if (global !== window) {
	        /* Assign the element function to Velocity's core animate() method. */
	        global.fn.velocity = animate;
	        /* Assign the object function's defaults to Velocity's global defaults object. */
	        global.fn.velocity.defaults = Velocity.defaults;
	    }

	    /***********************
	       Packaged Redirects
	    ***********************/

	    /* slideUp, slideDown */
	    $.each([ "Down", "Up" ], function(i, direction) {
	        Velocity.Redirects["slide" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
	            var opts = $.extend({}, options),
	                begin = opts.begin,
	                complete = opts.complete,
	                computedValues = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
	                inlineValues = {};

	            if (opts.display === undefined) {
	                /* Show the element before slideDown begins and hide the element after slideUp completes. */
	                /* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
	                opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
	            }

	            opts.begin = function() {
	                /* If the user passed in a begin callback, fire it now. */
	                begin && begin.call(elements, elements);

	                /* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
	                for (var property in computedValues) {
	                    inlineValues[property] = element.style[property];

	                    /* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
	                       use forcefeeding to start from computed values and animate down to 0. */
	                    var propertyValue = Velocity.CSS.getPropertyValue(element, property);
	                    computedValues[property] = (direction === "Down") ? [ propertyValue, 0 ] : [ 0, propertyValue ];
	                }

	                /* Force vertical overflow content to clip so that sliding works as expected. */
	                inlineValues.overflow = element.style.overflow;
	                element.style.overflow = "hidden";
	            }

	            opts.complete = function() {
	                /* Reset element to its pre-slide inline values once its slide animation is complete. */
	                for (var property in inlineValues) {
	                    element.style[property] = inlineValues[property];
	                }

	                /* If the user passed in a complete callback, fire it now. */
	                complete && complete.call(elements, elements);
	                promiseData && promiseData.resolver(elements);
	            };

	            Velocity(element, computedValues, opts);
	        };
	    });

	    /* fadeIn, fadeOut */
	    $.each([ "In", "Out" ], function(i, direction) {
	        Velocity.Redirects["fade" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
	            var opts = $.extend({}, options),
	                propertiesMap = { opacity: (direction === "In") ? 1 : 0 },
	                originalComplete = opts.complete;

	            /* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
	               callbacks by firing them only when the final element has been reached. */
	            if (elementsIndex !== elementsSize - 1) {
	                opts.complete = opts.begin = null;
	            } else {
	                opts.complete = function() {
	                    if (originalComplete) {
	                        originalComplete.call(elements, elements);
	                    }

	                    promiseData && promiseData.resolver(elements);
	                }
	            }

	            /* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
	            /* Note: We allow users to pass in "null" to skip display setting altogether. */
	            if (opts.display === undefined) {
	                opts.display = (direction === "In" ? "auto" : "none");
	            }

	            Velocity(this, propertiesMap, opts);
	        };
	    });

	    return Velocity;
	}((window.jQuery || window.Zepto || window), window, document);
	}));

	/******************
	   Known Issues
	******************/

	/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
	Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
	will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/**********************
	   Velocity UI Pack
	**********************/

	/* VelocityJS.org UI Pack (5.0.4). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */

	;(function (factory) {
	    /* CommonJS module. */
	    if (true ) {
	        module.exports = factory();
	    /* AMD module. */
	    } else if (typeof define === "function" && define.amd) {
	        define([ "velocity" ], factory);
	    /* Browser globals. */
	    } else {
	        factory();
	    }
	}(function() {
	return function (global, window, document, undefined) {

	    /*************
	        Checks
	    *************/

	    if (!global.Velocity || !global.Velocity.Utilities) {
	        window.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting.");
	        return;
	    } else {
	        var Velocity = global.Velocity,
	            $ = Velocity.Utilities;
	    }

	    var velocityVersion = Velocity.version,
	        requiredVersion = { major: 1, minor: 1, patch: 0 };

	    function greaterSemver (primary, secondary) {
	        var versionInts = [];

	        if (!primary || !secondary) { return false; }

	        $.each([ primary, secondary ], function(i, versionObject) {
	            var versionIntsComponents = [];

	            $.each(versionObject, function(component, value) {
	                while (value.toString().length < 5) {
	                    value = "0" + value;
	                }
	                versionIntsComponents.push(value);
	            });

	            versionInts.push(versionIntsComponents.join(""))
	        });

	        return (parseFloat(versionInts[0]) > parseFloat(versionInts[1]));
	    }

	    if (greaterSemver(requiredVersion, velocityVersion)){
	        var abortError = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
	        alert(abortError);
	        throw new Error(abortError);
	    }

	    /************************
	       Effect Registration
	    ************************/

	    /* Note: RegisterUI is a legacy name. */
	    Velocity.RegisterEffect = Velocity.RegisterUI = function (effectName, properties) {
	        /* Animate the expansion/contraction of the elements' parent's height for In/Out effects. */
	        function animateParentHeight (elements, direction, totalDuration, stagger) {
	            var totalHeightDelta = 0,
	                parentNode;

	            /* Sum the total height (including padding and margin) of all targeted elements. */
	            $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {
	                if (stagger) {
	                    /* Increase the totalDuration by the successive delay amounts produced by the stagger option. */
	                    totalDuration += i * stagger;
	                }

	                parentNode = element.parentNode;

	                $.each([ "height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(i, property) {
	                    totalHeightDelta += parseFloat(Velocity.CSS.getPropertyValue(element, property));
	                });
	            });

	            /* Animate the parent element's height adjustment (with a varying duration multiplier for aesthetic benefits). */
	            Velocity.animate(
	                parentNode,
	                { height: (direction === "In" ? "+" : "-") + "=" + totalHeightDelta },
	                { queue: false, easing: "ease-in-out", duration: totalDuration * (direction === "In" ? 0.6 : 1) }
	            );
	        }

	        /* Register a custom redirect for each effect. */
	        Velocity.Redirects[effectName] = function (element, redirectOptions, elementsIndex, elementsSize, elements, promiseData) {
	            var finalElement = (elementsIndex === elementsSize - 1);

	            if (typeof properties.defaultDuration === "function") {
	                properties.defaultDuration = properties.defaultDuration.call(elements, elements);
	            } else {
	                properties.defaultDuration = parseFloat(properties.defaultDuration);
	            }

	            /* Iterate through each effect's call array. */
	            for (var callIndex = 0; callIndex < properties.calls.length; callIndex++) {
	                var call = properties.calls[callIndex],
	                    propertyMap = call[0],
	                    redirectDuration = (redirectOptions.duration || properties.defaultDuration || 1000),
	                    durationPercentage = call[1],
	                    callOptions = call[2] || {},
	                    opts = {};

	                /* Assign the whitelisted per-call options. */
	                opts.duration = redirectDuration * (durationPercentage || 1);
	                opts.queue = redirectOptions.queue || "";
	                opts.easing = callOptions.easing || "ease";
	                opts.delay = parseFloat(callOptions.delay) || 0;
	                opts._cacheValues = callOptions._cacheValues || true;

	                /* Special processing for the first effect call. */
	                if (callIndex === 0) {
	                    /* If a delay was passed into the redirect, combine it with the first call's delay. */
	                    opts.delay += (parseFloat(redirectOptions.delay) || 0);

	                    if (elementsIndex === 0) {
	                        opts.begin = function() {
	                            /* Only trigger a begin callback on the first effect call with the first element in the set. */
	                            redirectOptions.begin && redirectOptions.begin.call(elements, elements);

	                            var direction = effectName.match(/(In|Out)$/);

	                            /* Make "in" transitioning elements invisible immediately so that there's no FOUC between now
	                               and the first RAF tick. */
	                            if ((direction && direction[0] === "In") && propertyMap.opacity !== undefined) {
	                                $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {
	                                    Velocity.CSS.setPropertyValue(element, "opacity", 0);
	                                });
	                            }

	                            /* Only trigger animateParentHeight() if we're using an In/Out transition. */
	                            if (redirectOptions.animateParentHeight && direction) {
	                                animateParentHeight(elements, direction[0], redirectDuration + opts.delay, redirectOptions.stagger);
	                            }
	                        }
	                    }

	                    /* If the user isn't overriding the display option, default to "auto" for "In"-suffixed transitions. */
	                    if (redirectOptions.display !== null) {
	                        if (redirectOptions.display !== undefined && redirectOptions.display !== "none") {
	                            opts.display = redirectOptions.display;
	                        } else if (/In$/.test(effectName)) {
	                            /* Inline elements cannot be subjected to transforms, so we switch them to inline-block. */
	                            var defaultDisplay = Velocity.CSS.Values.getDisplayType(element);
	                            opts.display = (defaultDisplay === "inline") ? "inline-block" : defaultDisplay;
	                        }
	                    }

	                    if (redirectOptions.visibility && redirectOptions.visibility !== "hidden") {
	                        opts.visibility = redirectOptions.visibility;
	                    }
	                }

	                /* Special processing for the last effect call. */
	                if (callIndex === properties.calls.length - 1) {
	                    /* Append promise resolving onto the user's redirect callback. */
	                    function injectFinalCallbacks () {
	                        if ((redirectOptions.display === undefined || redirectOptions.display === "none") && /Out$/.test(effectName)) {
	                            $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {
	                                Velocity.CSS.setPropertyValue(element, "display", "none");
	                            });
	                        }

	                        redirectOptions.complete && redirectOptions.complete.call(elements, elements);

	                        if (promiseData) {
	                            promiseData.resolver(elements || element);
	                        }
	                    }

	                    opts.complete = function() {
	                        if (properties.reset) {
	                            for (var resetProperty in properties.reset) {
	                                var resetValue = properties.reset[resetProperty];

	                                /* Format each non-array value in the reset property map to [ value, value ] so that changes apply
	                                   immediately and DOM querying is avoided (via forcefeeding). */
	                                /* Note: Don't forcefeed hooks, otherwise their hook roots will be defaulted to their null values. */
	                                if (Velocity.CSS.Hooks.registered[resetProperty] === undefined && (typeof resetValue === "string" || typeof resetValue === "number")) {
	                                    properties.reset[resetProperty] = [ properties.reset[resetProperty], properties.reset[resetProperty] ];
	                                }
	                            }

	                            /* So that the reset values are applied instantly upon the next rAF tick, use a zero duration and parallel queueing. */
	                            var resetOptions = { duration: 0, queue: false };

	                            /* Since the reset option uses up the complete callback, we trigger the user's complete callback at the end of ours. */
	                            if (finalElement) {
	                                resetOptions.complete = injectFinalCallbacks;
	                            }

	                            Velocity.animate(element, properties.reset, resetOptions);
	                        /* Only trigger the user's complete callback on the last effect call with the last element in the set. */
	                        } else if (finalElement) {
	                            injectFinalCallbacks();
	                        }
	                    };

	                    if (redirectOptions.visibility === "hidden") {
	                        opts.visibility = redirectOptions.visibility;
	                    }
	                }

	                Velocity.animate(element, propertyMap, opts);
	            }
	        };

	        /* Return the Velocity object so that RegisterUI calls can be chained. */
	        return Velocity;
	    };

	    /*********************
	       Packaged Effects
	    *********************/

	    /* Externalize the packagedEffects data so that they can optionally be modified and re-registered. */
	    /* Support: <=IE8: Callouts will have no effect, and transitions will simply fade in/out. IE9/Android 2.3: Most effects are fully supported, the rest fade in/out. All other browsers: full support. */
	    Velocity.RegisterEffect.packagedEffects =
	        {
	            /* Animate.css */
	            "callout.bounce": {
	                defaultDuration: 550,
	                calls: [
	                    [ { translateY: -30 }, 0.25 ],
	                    [ { translateY: 0 }, 0.125 ],
	                    [ { translateY: -15 }, 0.125 ],
	                    [ { translateY: 0 }, 0.25 ]
	                ]
	            },
	            /* Animate.css */
	            "callout.shake": {
	                defaultDuration: 800,
	                calls: [
	                    [ { translateX: -11 }, 0.125 ],
	                    [ { translateX: 11 }, 0.125 ],
	                    [ { translateX: -11 }, 0.125 ],
	                    [ { translateX: 11 }, 0.125 ],
	                    [ { translateX: -11 }, 0.125 ],
	                    [ { translateX: 11 }, 0.125 ],
	                    [ { translateX: -11 }, 0.125 ],
	                    [ { translateX: 0 }, 0.125 ]
	                ]
	            },
	            /* Animate.css */
	            "callout.flash": {
	                defaultDuration: 1100,
	                calls: [
	                    [ { opacity: [ 0, "easeInOutQuad", 1 ] }, 0.25 ],
	                    [ { opacity: [ 1, "easeInOutQuad" ] }, 0.25 ],
	                    [ { opacity: [ 0, "easeInOutQuad" ] }, 0.25 ],
	                    [ { opacity: [ 1, "easeInOutQuad" ] }, 0.25 ]
	                ]
	            },
	            /* Animate.css */
	            "callout.pulse": {
	                defaultDuration: 825,
	                calls: [
	                    [ { scaleX: 1.1, scaleY: 1.1 }, 0.50, { easing: "easeInExpo" } ],
	                    [ { scaleX: 1, scaleY: 1 }, 0.50 ]
	                ]
	            },
	            /* Animate.css */
	            "callout.swing": {
	                defaultDuration: 950,
	                calls: [
	                    [ { rotateZ: 15 }, 0.20 ],
	                    [ { rotateZ: -10 }, 0.20 ],
	                    [ { rotateZ: 5 }, 0.20 ],
	                    [ { rotateZ: -5 }, 0.20 ],
	                    [ { rotateZ: 0 }, 0.20 ]
	                ]
	            },
	            /* Animate.css */
	            "callout.tada": {
	                defaultDuration: 1000,
	                calls: [
	                    [ { scaleX: 0.9, scaleY: 0.9, rotateZ: -3 }, 0.10 ],
	                    [ { scaleX: 1.1, scaleY: 1.1, rotateZ: 3 }, 0.10 ],
	                    [ { scaleX: 1.1, scaleY: 1.1, rotateZ: -3 }, 0.10 ],
	                    [ "reverse", 0.125 ],
	                    [ "reverse", 0.125 ],
	                    [ "reverse", 0.125 ],
	                    [ "reverse", 0.125 ],
	                    [ "reverse", 0.125 ],
	                    [ { scaleX: 1, scaleY: 1, rotateZ: 0 }, 0.20 ]
	                ]
	            },
	            "transition.fadeIn": {
	                defaultDuration: 500,
	                calls: [
	                    [ { opacity: [ 1, 0 ] } ]
	                ]
	            },
	            "transition.fadeOut": {
	                defaultDuration: 500,
	                calls: [
	                    [ { opacity: [ 0, 1 ] } ]
	                ]
	            },
	            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
	            "transition.flipXIn": {
	                defaultDuration: 700,
	                calls: [
	                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], rotateY: [ 0, -55 ] } ]
	                ],
	                reset: { transformPerspective: 0 }
	            },
	            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
	            "transition.flipXOut": {
	                defaultDuration: 700,
	                calls: [
	                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], rotateY: 55 } ]
	                ],
	                reset: { transformPerspective: 0, rotateY: 0 }
	            },
	            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
	            "transition.flipYIn": {
	                defaultDuration: 800,
	                calls: [
	                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], rotateX: [ 0, -45 ] } ]
	                ],
	                reset: { transformPerspective: 0 }
	            },
	            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
	            "transition.flipYOut": {
	                defaultDuration: 800,
	                calls: [
	                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], rotateX: 25 } ]
	                ],
	                reset: { transformPerspective: 0, rotateX: 0 }
	            },
	            /* Animate.css */
	            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
	            "transition.flipBounceXIn": {
	                defaultDuration: 900,
	                calls: [
	                    [ { opacity: [ 0.725, 0 ], transformPerspective: [ 400, 400 ], rotateY: [ -10, 90 ] }, 0.50 ],
	                    [ { opacity: 0.80, rotateY: 10 }, 0.25 ],
	                    [ { opacity: 1, rotateY: 0 }, 0.25 ]
	                ],
	                reset: { transformPerspective: 0 }
	            },
	            /* Animate.css */
	            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
	            "transition.flipBounceXOut": {
	                defaultDuration: 800,
	                calls: [
	                    [ { opacity: [ 0.9, 1 ], transformPerspective: [ 400, 400 ], rotateY: -10 }, 0.50 ],
	                    [ { opacity: 0, rotateY: 90 }, 0.50 ]
	                ],
	                reset: { transformPerspective: 0, rotateY: 0 }
	            },
	            /* Animate.css */
	            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
	            "transition.flipBounceYIn": {
	                defaultDuration: 850,
	                calls: [
	                    [ { opacity: [ 0.725, 0 ], transformPerspective: [ 400, 400 ], rotateX: [ -10, 90 ] }, 0.50 ],
	                    [ { opacity: 0.80, rotateX: 10 }, 0.25 ],
	                    [ { opacity: 1, rotateX: 0 }, 0.25 ]
	                ],
	                reset: { transformPerspective: 0 }
	            },
	            /* Animate.css */
	            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
	            "transition.flipBounceYOut": {
	                defaultDuration: 800,
	                calls: [
	                    [ { opacity: [ 0.9, 1 ], transformPerspective: [ 400, 400 ], rotateX: -15 }, 0.50 ],
	                    [ { opacity: 0, rotateX: 90 }, 0.50 ]
	                ],
	                reset: { transformPerspective: 0, rotateX: 0 }
	            },
	            /* Magic.css */
	            "transition.swoopIn": {
	                defaultDuration: 850,
	                calls: [
	                    [ { opacity: [ 1, 0 ], transformOriginX: [ "100%", "50%" ], transformOriginY: [ "100%", "100%" ], scaleX: [ 1, 0 ], scaleY: [ 1, 0 ], translateX: [ 0, -700 ], translateZ: 0 } ]
	                ],
	                reset: { transformOriginX: "50%", transformOriginY: "50%" }
	            },
	            /* Magic.css */
	            "transition.swoopOut": {
	                defaultDuration: 850,
	                calls: [
	                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "100%" ], transformOriginY: [ "100%", "100%" ], scaleX: 0, scaleY: 0, translateX: -700, translateZ: 0 } ]
	                ],
	                reset: { transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0 }
	            },
	            /* Magic.css */
	            /* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
	            "transition.whirlIn": {
	                defaultDuration: 850,
	                calls: [
	                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 0 ], scaleY: [ 1, 0 ], rotateY: [ 0, 160 ] }, 1, { easing: "easeInOutSine" } ]
	                ]
	            },
	            /* Magic.css */
	            /* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
	            "transition.whirlOut": {
	                defaultDuration: 750,
	                calls: [
	                    [ { opacity: [ 0, "easeInOutQuint", 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 0, scaleY: 0, rotateY: 160 }, 1, { easing: "swing" } ]
	                ],
	                reset: { scaleX: 1, scaleY: 1, rotateY: 0 }
	            },
	            "transition.shrinkIn": {
	                defaultDuration: 750,
	                calls: [
	                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 1.5 ], scaleY: [ 1, 1.5 ], translateZ: 0 } ]
	                ]
	            },
	            "transition.shrinkOut": {
	                defaultDuration: 600,
	                calls: [
	                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 1.3, scaleY: 1.3, translateZ: 0 } ]
	                ],
	                reset: { scaleX: 1, scaleY: 1 }
	            },
	            "transition.expandIn": {
	                defaultDuration: 700,
	                calls: [
	                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 0.625 ], scaleY: [ 1, 0.625 ], translateZ: 0 } ]
	                ]
	            },
	            "transition.expandOut": {
	                defaultDuration: 700,
	                calls: [
	                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 0.5, scaleY: 0.5, translateZ: 0 } ]
	                ],
	                reset: { scaleX: 1, scaleY: 1 }
	            },
	            /* Animate.css */
	            "transition.bounceIn": {
	                defaultDuration: 800,
	                calls: [
	                    [ { opacity: [ 1, 0 ], scaleX: [ 1.05, 0.3 ], scaleY: [ 1.05, 0.3 ] }, 0.40 ],
	                    [ { scaleX: 0.9, scaleY: 0.9, translateZ: 0 }, 0.20 ],
	                    [ { scaleX: 1, scaleY: 1 }, 0.50 ]
	                ]
	            },
	            /* Animate.css */
	            "transition.bounceOut": {
	                defaultDuration: 800,
	                calls: [
	                    [ { scaleX: 0.95, scaleY: 0.95 }, 0.35 ],
	                    [ { scaleX: 1.1, scaleY: 1.1, translateZ: 0 }, 0.35 ],
	                    [ { opacity: [ 0, 1 ], scaleX: 0.3, scaleY: 0.3 }, 0.30 ]
	                ],
	                reset: { scaleX: 1, scaleY: 1 }
	            },
	            /* Animate.css */
	            "transition.bounceUpIn": {
	                defaultDuration: 800,
	                calls: [
	                    [ { opacity: [ 1, 0 ], translateY: [ -30, 1000 ] }, 0.60, { easing: "easeOutCirc" } ],
	                    [ { translateY: 10 }, 0.20 ],
	                    [ { translateY: 0 }, 0.20 ]
	                ]
	            },
	            /* Animate.css */
	            "transition.bounceUpOut": {
	                defaultDuration: 1000,
	                calls: [
	                    [ { translateY: 20 }, 0.20 ],
	                    [ { opacity: [ 0, "easeInCirc", 1 ], translateY: -1000 }, 0.80 ]
	                ],
	                reset: { translateY: 0 }
	            },
	            /* Animate.css */
	            "transition.bounceDownIn": {
	                defaultDuration: 800,
	                calls: [
	                    [ { opacity: [ 1, 0 ], translateY: [ 30, -1000 ] }, 0.60, { easing: "easeOutCirc" } ],
	                    [ { translateY: -10 }, 0.20 ],
	                    [ { translateY: 0 }, 0.20 ]
	                ]
	            },
	            /* Animate.css */
	            "transition.bounceDownOut": {
	                defaultDuration: 1000,
	                calls: [
	                    [ { translateY: -20 }, 0.20 ],
	                    [ { opacity: [ 0, "easeInCirc", 1 ], translateY: 1000 }, 0.80 ]
	                ],
	                reset: { translateY: 0 }
	            },
	            /* Animate.css */
	            "transition.bounceLeftIn": {
	                defaultDuration: 750,
	                calls: [
	                    [ { opacity: [ 1, 0 ], translateX: [ 30, -1250 ] }, 0.60, { easing: "easeOutCirc" } ],
	                    [ { translateX: -10 }, 0.20 ],
	                    [ { translateX: 0 }, 0.20 ]
	                ]
	            },
	            /* Animate.css */
	            "transition.bounceLeftOut": {
	                defaultDuration: 750,
	                calls: [
	                    [ { translateX: 30 }, 0.20 ],
	                    [ { opacity: [ 0, "easeInCirc", 1 ], translateX: -1250 }, 0.80 ]
	                ],
	                reset: { translateX: 0 }
	            },
	            /* Animate.css */
	            "transition.bounceRightIn": {
	                defaultDuration: 750,
	                calls: [
	                    [ { opacity: [ 1, 0 ], translateX: [ -30, 1250 ] }, 0.60, { easing: "easeOutCirc" } ],
	                    [ { translateX: 10 }, 0.20 ],
	                    [ { translateX: 0 }, 0.20 ]
	                ]
	            },
	            /* Animate.css */
	            "transition.bounceRightOut": {
	                defaultDuration: 750,
	                calls: [
	                    [ { translateX: -30 }, 0.20 ],
	                    [ { opacity: [ 0, "easeInCirc", 1 ], translateX: 1250 }, 0.80 ]
	                ],
	                reset: { translateX: 0 }
	            },
	            "transition.slideUpIn": {
	                defaultDuration: 900,
	                calls: [
	                    [ { opacity: [ 1, 0 ], translateY: [ 0, 20 ], translateZ: 0 } ]
	                ]
	            },
	            "transition.slideUpOut": {
	                defaultDuration: 900,
	                calls: [
	                    [ { opacity: [ 0, 1 ], translateY: -20, translateZ: 0 } ]
	                ],
	                reset: { translateY: 0 }
	            },
	            "transition.slideDownIn": {
	                defaultDuration: 900,
	                calls: [
	                    [ { opacity: [ 1, 0 ], translateY: [ 0, -20 ], translateZ: 0 } ]
	                ]
	            },
	            "transition.slideDownOut": {
	                defaultDuration: 900,
	                calls: [
	                    [ { opacity: [ 0, 1 ], translateY: 20, translateZ: 0 } ]
	                ],
	                reset: { translateY: 0 }
	            },
	            "transition.slideLeftIn": {
	                defaultDuration: 1000,
	                calls: [
	                    [ { opacity: [ 1, 0 ], translateX: [ 0, -20 ], translateZ: 0 } ]
	                ]
	            },
	            "transition.slideLeftOut": {
	                defaultDuration: 1050,
	                calls: [
	                    [ { opacity: [ 0, 1 ], translateX: -20, translateZ: 0 } ]
	                ],
	                reset: { translateX: 0 }
	            },
	            "transition.slideRightIn": {
	                defaultDuration: 1000,
	                calls: [
	                    [ { opacity: [ 1, 0 ], translateX: [ 0, 20 ], translateZ: 0 } ]
	                ]
	            },
	            "transition.slideRightOut": {
	                defaultDuration: 1050,
	                calls: [
	                    [ { opacity: [ 0, 1 ], translateX: 20, translateZ: 0 } ]
	                ],
	                reset: { translateX: 0 }
	            },
	            "transition.slideUpBigIn": {
	                defaultDuration: 850,
	                calls: [
	                    [ { opacity: [ 1, 0 ], translateY: [ 0, 75 ], translateZ: 0 } ]
	                ]
	            },
	            "transition.slideUpBigOut": {
	                defaultDuration: 800,
	                calls: [
	                    [ { opacity: [ 0, 1 ], translateY: -75, translateZ: 0 } ]
	                ],
	                reset: { translateY: 0 }
	            },
	            "transition.slideDownBigIn": {
	                defaultDuration: 850,
	                calls: [
	                    [ { opacity: [ 1, 0 ], translateY: [ 0, -75 ], translateZ: 0 } ]
	                ]
	            },
	            "transition.slideDownBigOut": {
	                defaultDuration: 800,
	                calls: [
	                    [ { opacity: [ 0, 1 ], translateY: 75, translateZ: 0 } ]
	                ],
	                reset: { translateY: 0 }
	            },
	            "transition.slideLeftBigIn": {
	                defaultDuration: 800,
	                calls: [
	                    [ { opacity: [ 1, 0 ], translateX: [ 0, -75 ], translateZ: 0 } ]
	                ]
	            },
	            "transition.slideLeftBigOut": {
	                defaultDuration: 750,
	                calls: [
	                    [ { opacity: [ 0, 1 ], translateX: -75, translateZ: 0 } ]
	                ],
	                reset: { translateX: 0 }
	            },
	            "transition.slideRightBigIn": {
	                defaultDuration: 800,
	                calls: [
	                    [ { opacity: [ 1, 0 ], translateX: [ 0, 75 ], translateZ: 0 } ]
	                ]
	            },
	            "transition.slideRightBigOut": {
	                defaultDuration: 750,
	                calls: [
	                    [ { opacity: [ 0, 1 ], translateX: 75, translateZ: 0 } ]
	                ],
	                reset: { translateX: 0 }
	            },
	            /* Magic.css */
	            "transition.perspectiveUpIn": {
	                defaultDuration: 800,
	                calls: [
	                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ "100%", "100%" ], rotateX: [ 0, -180 ] } ]
	                ],
	                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
	            },
	            /* Magic.css */
	            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
	            "transition.perspectiveUpOut": {
	                defaultDuration: 850,
	                calls: [
	                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ "100%", "100%" ], rotateX: -180 } ]
	                ],
	                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }
	            },
	            /* Magic.css */
	            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
	            "transition.perspectiveDownIn": {
	                defaultDuration: 800,
	                calls: [
	                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateX: [ 0, 180 ] } ]
	                ],
	                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
	            },
	            /* Magic.css */
	            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
	            "transition.perspectiveDownOut": {
	                defaultDuration: 850,
	                calls: [
	                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateX: 180 } ]
	                ],
	                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }
	            },
	            /* Magic.css */
	            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
	            "transition.perspectiveLeftIn": {
	                defaultDuration: 950,
	                calls: [
	                    [ { opacity: [ 1, 0 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateY: [ 0, -180 ] } ]
	                ],
	                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
	            },
	            /* Magic.css */
	            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
	            "transition.perspectiveLeftOut": {
	                defaultDuration: 950,
	                calls: [
	                    [ { opacity: [ 0, 1 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateY: -180 } ]
	                ],
	                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }
	            },
	            /* Magic.css */
	            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
	            "transition.perspectiveRightIn": {
	                defaultDuration: 950,
	                calls: [
	                    [ { opacity: [ 1, 0 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ "100%", "100%" ], transformOriginY: [ 0, 0 ], rotateY: [ 0, 180 ] } ]
	                ],
	                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
	            },
	            /* Magic.css */
	            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
	            "transition.perspectiveRightOut": {
	                defaultDuration: 950,
	                calls: [
	                    [ { opacity: [ 0, 1 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ "100%", "100%" ], transformOriginY: [ 0, 0 ], rotateY: 180 } ]
	                ],
	                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }
	            }
	        };

	    /* Register the packaged effects. */
	    for (var effectName in Velocity.RegisterEffect.packagedEffects) {
	        Velocity.RegisterEffect(effectName, Velocity.RegisterEffect.packagedEffects[effectName]);
	    }

	    /*********************
	       Sequence Running
	    **********************/

	    /* Note: Sequence calls must use Velocity's single-object arguments syntax. */
	    Velocity.RunSequence = function (originalSequence) {
	        var sequence = $.extend(true, [], originalSequence);

	        if (sequence.length > 1) {
	            $.each(sequence.reverse(), function(i, currentCall) {
	                var nextCall = sequence[i + 1];

	                if (nextCall) {
	                    /* Parallel sequence calls (indicated via sequenceQueue:false) are triggered
	                       in the previous call's begin callback. Otherwise, chained calls are normally triggered
	                       in the previous call's complete callback. */
	                    var currentCallOptions = currentCall.o || currentCall.options,
	                        nextCallOptions = nextCall.o || nextCall.options;

	                    var timing = (currentCallOptions && currentCallOptions.sequenceQueue === false) ? "begin" : "complete",
	                        callbackOriginal = nextCallOptions && nextCallOptions[timing],
	                        options = {};

	                    options[timing] = function() {
	                        var nextCallElements = nextCall.e || nextCall.elements;
	                        var elements = nextCallElements.nodeType ? [ nextCallElements ] : nextCallElements;

	                        callbackOriginal && callbackOriginal.call(elements, elements);
	                        Velocity(currentCall);
	                    }

	                    if (nextCall.o) {
	                        nextCall.o = $.extend({}, nextCallOptions, options);
	                    } else {
	                        nextCall.options = $.extend({}, nextCallOptions, options);
	                    }
	                }
	            });

	            sequence.reverse();
	        }

	        Velocity(sequence[0]);
	    };
	}((window.jQuery || window.Zepto || window), window, document);
	}));

/***/ }
/******/ ])
});
;