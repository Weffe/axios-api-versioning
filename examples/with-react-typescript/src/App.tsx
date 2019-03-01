import * as React from 'react';
import { AxiosRequestForm } from './AxiosRequestForm';
import { AxiosPromise, AxiosError } from 'axios';

interface IAppState {
  responseData: object[];
  url: string;
  hasError: boolean;
  acceptHeader: string;
}

export class App extends React.Component<object, IAppState> {
  public readonly state = {
    responseData: [],
    hasError: false,
    url: '',
    acceptHeader: ''
  }

  public handleSubmit = async (request: AxiosPromise) => {
    try {
      const res = await request;

      this.setState({
        responseData: res.data,
        hasError: false,
        url: res.request.responseURL,
        acceptHeader: res.config.headers["Accept"]
      })
    }
    catch (e) {
      const error = e as AxiosError;
      console.group('Axios Error Information')
      console.error(error.message)
      console.info('Printing request config...')
      console.info(error.config)
      console.info('Printing request headers...')
      console.info(error.config.headers)
      console.groupEnd();

      this.setState({
        responseData: [],
        hasError: true,
        url: error.request.responseURL,
        acceptHeader: error.config.headers["Accept"]
      })
    }
  }

  renderResponseData = (responseData: object[]) => (
    <div className="p-5 bg-green-darkest">
      <span className="text-yellow">Response Data</span>
      <pre className="mt-3 text-grey-lighter">
        {(responseData.length > 0)
          ? JSON.stringify(responseData, null, 2)
          : 'No Response Data...'
        }
      </pre>
    </div>
  )

  renderFailureMessage = () => (
    <div className="p-5 bg-red-darkest">
      <span className="text-yellow">Error: The request you submitted failed. Check the console for more details.</span>
    </div>
  )

  renderUrl = (url: string) => (
    <div className="p-3 rounded border border-grey-light bg-white text-grey-dark">
      {url
        ? <span>{url}</span>
        : <span>http://example.com</span>
      }
    </div>
  )

  renderAcceptHeader = (acceptHeader: string) => (
    <div className="mt-5 mb-3">
      <span className="text-bold">Accept Header:</span>
      <span className="m-2 p-2 bg-white text-blue-dark border border-grey-light">
        {acceptHeader
          ? acceptHeader
          : 'empty...'
        }
      </span>
    </div>
  )

  render() {
    const { responseData, hasError, url, acceptHeader } = this.state;

    return (
      <>
        <section>
          <h2>How to use this?</h2>
          <ol className="my-3">
            <li>Select the api version of the backend</li>
            <li>Select the versioning strategy</li>
            <li>Click the <strong>Send Request</strong> button</li>
            <li>Check the output box for info or see the Network Tab in your browser's dev tools.</li>
          </ol>
        </section>
        <AxiosRequestForm onSubmit={this.handleSubmit} />
        <section>
          <div className="mt-5 p-3 rounded-t bg-grey-lighter border border-grey">
            {this.renderUrl(url)}
            {this.renderAcceptHeader(acceptHeader)}
          </div>
          {hasError
            ? this.renderFailureMessage()
            : this.renderResponseData(responseData)
          }
        </section>
      </>
    );
  }
}


