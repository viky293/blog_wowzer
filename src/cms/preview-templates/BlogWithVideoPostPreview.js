import React from 'react'
import PropTypes from 'prop-types'
import {BlogWithVideoPostTemplate} from '../../templates/blog-with-video-post'

const BlogWithVideoPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <BlogWithVideoPostTemplate
      content={widgetFor('body')}
      video={entry.getIn(['data','video'])}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

BlogWithVideoPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogWithVideoPostPreview
