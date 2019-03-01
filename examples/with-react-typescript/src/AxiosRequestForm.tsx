import * as React from 'react';
import { AxiosPromise } from 'axios'
import { VersioningStrategy } from 'axios-api-versioning'
import { getBooksByQueryString, getBooksByUrlPath, getBooksByMediaType } from './api'

interface IAxiosRequestFormProps {
    onSubmit: (request: AxiosPromise) => void;
}

interface IAxiosRequestFormState {
    apiVersion: '1' | '2' | '3';
    versioningStrategy: VersioningStrategy
}

export class AxiosRequestForm extends React.Component<IAxiosRequestFormProps, IAxiosRequestFormState> {
    public readonly state: IAxiosRequestFormState;

    constructor(props: IAxiosRequestFormProps) {
        super(props);

        this.state = {
            apiVersion: "1",
            versioningStrategy: VersioningStrategy.QueryString
        }
    }

    public updateSelectValue = (name: keyof IAxiosRequestFormState) => (e: React.ChangeEvent<HTMLSelectElement>) => {
        //@ts-ignore
        this.setState({
            [name]: e.currentTarget.value
        })
    }

    public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const { apiVersion, versioningStrategy } = this.state;

        e.preventDefault();

        if (versioningStrategy === VersioningStrategy.QueryString) {
            const pendingRequest = getBooksByQueryString(apiVersion);

            this.props.onSubmit(pendingRequest);
        }

        if (versioningStrategy === VersioningStrategy.UrlPath) {
            const pendingRequest = getBooksByUrlPath(apiVersion);

            this.props.onSubmit(pendingRequest);
        }

        if (versioningStrategy === VersioningStrategy.MediaType) {
            const pendingRequest = getBooksByMediaType(apiVersion);

            this.props.onSubmit(pendingRequest);
        }
    }

    public render() {
        const { apiVersion, versioningStrategy } = this.state;

        return (
            <section className="mt-5 pt-5 border-t border-blue border-dashed">
                <form onSubmit={this.handleSubmit} className="w-full max-w-md">
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                htmlFor="api-version"
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                Api Version
                            </label>
                            <div className="relative">
                                <select
                                    id="api-version"
                                    className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
                                    value={apiVersion}
                                    onChange={this.updateSelectValue('apiVersion')}>
                                    <option value="1">Version 1</option>
                                    <option value="2">Version 2</option>
                                    <option value="3">Version 3</option>
                                </select>
                                <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                htmlFor="versioning-strategy"
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                                Versioning Strategy
                            </label>
                            <div className="relative">
                                <select
                                    id="versioning-strategy"
                                    className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
                                    value={versioningStrategy}
                                    onChange={this.updateSelectValue('versioningStrategy')}>
                                    <option value={VersioningStrategy.QueryString}>Query String</option>
                                    <option value={VersioningStrategy.MediaType}>Media Type</option>
                                    <option value={VersioningStrategy.UrlPath}>URL Path</option>
                                </select>
                                <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-3 mt-6 xs:mt-0">
                            <button
                                type="submit"
                                className="bg-blue hover:bg-blue-dark text-white focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded">
                                Send Request
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}
