import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../Redux/actionReddit';
import Picker from '../components/reddit/Picker'
import Posts from '../components/reddit/Posts';
import { push } from 'react-router-redux';

class AsyncApp extends Component {

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
        dispatch(push('Home'))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const { dispatch, selectedSubrediit } = this.props;
            dispatch(fetchPostsIfNeeded(selectedSubrediit));
        }
    }

    handleChange = (nextSubreddit) => {
        this.props.dispatch(selectSubreddit(nextSubreddit))
    }

    handleRefreshClick = (e) => {
        e.preventDefault();

        const { dispatch, selectedSubreddit } = this.props;
        dispatch(invalidateSubreddit(selectedSubreddit));
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }

    render() {
       const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props;
       return (
           <div>
               <Picker value={selectedSubreddit}
                       onChange={this.handleChange}
                       options={[ 'reactjs', 'frontend' ]}
                       />
               <p>
                   {lastUpdated &&
                       <span>
                           Last updated at { new Date(lastUpdated).toLocaleTimeString()}.
                       </span>
                   }
                   {!isFetching &&
                       <a href="#"
                          onClick={this.handleRefreshClick}>
                           Refresh
                       </a>
                   }
               </p>
               {isFetching && posts.length === 0 &&
                   <h2>Loading</h2>
               }
               {!isFetching && posts.length === 0 &&
                   <h2>Empty</h2>
               }
               {posts.length > 0 &&
                   <div style={{ opacity: isFetching ? 0.5 : 1}}>
                       <Posts posts={posts} />
                   </div>
               }
           </div>
       )
    }
}

AsyncApp.propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    // console.log(state);
    const { selectedSubreddit, postsBySubreddit } = state;
    const { isFetching, lastUpdated, items: posts } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    }

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}

// export default AsyncApp;
export default connect(mapStateToProps)(AsyncApp);