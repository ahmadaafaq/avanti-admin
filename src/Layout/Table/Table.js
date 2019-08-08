/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import { bindClassMethodsToThis } from '../../Services/Utils/Utility';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import Pagination from '../../Components/Pagination/Pagination';
import Modal from '../../Components/Modal/Modal';
import TableStyles from './Table.style.js';

/**
 * Table.
 *
 * @class
 * @copyright 2019 Asearch.  All Rights Reserved.
 * @extends {Component}
 */

class Table extends Component {
    constructor(props) {
        super(props);
        bindClassMethodsToThis(Table.prototype, this);
    }

    openModal() {
        const modal = document.querySelector('.modal');
        this.props.toggleCreated();
        if (modal) {
            modal.style.display = 'flex';
            modal.removeAttribute('aria-hidden');
        }
    }

    keyUpHandler(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            this.props.searchData(event.target.value);
        }
    }

    render() {
        let noData;
        let pagination;
        if (this.props.dataArray.length === 0) {
            noData = (
                <div className="flex-table row" role="rowgroup">
                    <div className="flex-row no-data" role="cell">No data found</div>
                </div>
            )
        } else if (this.props.dataArray.length > 20) {
            pagination = <Pagination />;
        }
        return (
            <div className="table-container" role="table" aria-label="Destinations" css={TableStyles}>
                <div className="table-menu">
                    < div className="table-search">
                        {!this.props.noSearch &&
                            <Input classname="table-search-input" placeholder="Search" keyUpHandler={() => this.keyUpHandler} />
                        }
                    </div>
                    <div className="table-name">
                        <p>{this.props.screen} List</p>
                    </div>
                    <div className="table-create" onClick={() => this.openModal()}>
                        <Button className="create-btn" color="green" text="Create" />
                    </div>
                </div>
                <div className="flex-table header" role="rowgroup">
                    {this.props.tableHeaders.map((header, key) =>
                        <div key={key} className="flex-row" role="columnheader">{header}</div>
                    )}
                </div>

                {
                    this.props.dataArray.map((data, key) =>
                        <div key={key} className="flex-table row" role="rowgroup">
                            {data.map((dataVal, key) =>
                                key !== 0 &&
                                <div key={key}
                                    className="flex-row"
                                    role="cell"
                                    onClick={() => {
                                        if (key === 1) {
                                            if (this.props.updateData) {
                                                this.props.updateData(data[0]);
                                                this.openModal();
                                            }
                                        }
                                    }}
                                >
                                    {dataVal}
                                </div>
                            )}
                        </div>
                    )
                }
                {noData}
                {pagination}
                <Modal
                    screen={this.props.screen}
                    formData={this.props.formData}
                    submitForm={this.props.submitForm}
                    created={this.props.created}
                    dataToUpdate={this.props.dataToUpdate}
                    closeModal={this.props.closeModal}
                />
            </div >
        );
    }
}

export default Table;