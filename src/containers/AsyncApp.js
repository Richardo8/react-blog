import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../Redux/actionReddit';
import Picker from '../components/reddit/Picker'
import Posts from '../components/reddit/Posts';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types'

// 试用装饰器的用法 装饰器实际就是修改类的行为，包括参数，方法。在这个例子中，实际意义就是mapStateToProps方法返回了这个组件需要的参数
// 利用装饰器将这些参数放在类中由类来使用。
@connect((state, dispatch) => {
    console.log(state);
    console.log(dispatch);
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
})
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

// AsyncApp.defaultProps = {
//     posts: [],
//     isFetching: false,
//     dispatch: function () {
//
//     },
//     selectedSubreddit: 'state'
// }

// function mapStateToProps(state) {
//     console.log(state);
//     const { selectedSubreddit, postsBySubreddit } = state;
//     const { isFetching, lastUpdated, items: posts } = postsBySubreddit[selectedSubreddit] || {
//         isFetching: true,
//         items: []
//     }
//     return {
//         selectedSubreddit,
//         posts,
//         isFetching,
//         lastUpdated
//     }
// }

export default AsyncApp;
// export default connect(mapStateToProps)(AsyncApp);