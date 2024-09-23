import React from 'react';
import PropTypes from 'prop-types';
import loaderCss from './loader';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta
          httpEquiv='x-ua-compatible'
          content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name="google-signin-client_id" content="660388239328-g0h70bqq00uekqmsfdgsovv3thqq1dm3.apps.googleusercontent.com"></meta>
        {props.headComponents}
        <style>{loaderCss}</style>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
      </head>
      <body {...props.bodyAttributes}>
        {/* <div
          id='loaderWrapper'
          className='loaderWrapper'>
          <div
            className='loader'
            id='loader'>
            <div className='face'>
              <div className='circle' />
            </div>
            <div className='face'>
              <div className='circle' />
            </div>
          </div>
        </div> */}
        {props.preBodyComponents}
        <div
          key={'body'}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
