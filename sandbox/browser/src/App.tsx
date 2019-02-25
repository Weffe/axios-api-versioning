import * as React from 'react';
import { AxiosRequestForm } from './AxiosRequestForm';
import { AxiosPromise, AxiosResponse, AxiosError } from 'axios';

export class App extends React.Component {
  public handleSubmit = async (request: AxiosPromise) => {
    try {
      const res = await request;
      console.log(res.data)
    }
    catch (e) {
      const error = e as AxiosError;

      console.error(error)
      console.info(JSON.stringify(error, null, 4))
    }
  }

  render() {
    return (
      <>
        <section>
          <h2>How to use this sandbox?</h2>
          <ol className="my-3">
            <li>Select the api version of the backend</li>
            <li>Select the versioning strategy</li>
            <li>Click the <strong>Send Request</strong> button</li>
            <li>Check the output box for info or see the Network Tab in your browser's dev tools.</li>
          </ol>
          <p>Feel free to select different versions of the api </p>
        </section>
        <AxiosRequestForm onSubmit={this.handleSubmit} />
      </>
    );
  }
}


