import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

class LocationSearchInput extends Component {
    render() {
        return (
            <PlacesAutocomplete
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.handleChange}
                onSelect={this.props.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            name={this.props.name}
                            value={this.props.value}
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                            required
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion, index) => {
                                let suggestionString = `${suggestion.terms[0].value}`
                                if (suggestion.terms[2]) {
                                    suggestionString = suggestionString + `, ${suggestion.terms[2].value}`
                                }

                                if (suggestion.terms[3]) {
                                    suggestionString = suggestionString + ` ${suggestion.terms[3].value}`
                                }

                                const className = suggestion.active
                                    ? 'suggestionItemActive'
                                    : 'suggestionItem';
                                const style = suggestion.active
                                    ? { backgroundColor: '#2E9CCA', color: '#ffffff', cursor: 'pointer' }
                                    : { backgroundColor: '#25274D', color: '#ffffff', cursor: 'pointer' };

                                return (
                                    <div key={index}
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestionString} </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

export default LocationSearchInput;