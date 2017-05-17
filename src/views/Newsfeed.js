import React from 'react';

import PropTypes from 'prop-types';

const samplePost = {
    id: 1,
    title: "A very cool post",
    content: (
        <div>
            <p className="mt0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ducimus fugiat fugit, minus modi qui quod ratione repellat ut vero?</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque enim, illo odio temporibus vitae voluptatem! Adipisci amet architecto at cum doloremque dolorum ducimus eveniet ex, facere iure libero molestiae non numquam quam rem sit ut vel? Animi aperiam assumenda consectetur dolore dolorem eaque ex exercitationem facilis labore natus obcaecati quisquam quos recusandae rem sint totam vero, voluptatum? Accusamus animi aperiam aspernatur at distinctio dolor ducimus eveniet facere, fugiat incidunt ipsa magnam maxime molestiae molestias, officiis pariatur perspiciatis praesentium, quisquam rem saepe sunt velit voluptas voluptatibus. Assumenda odio provident quidem recusandae repellat. Distinctio ducimus facere illum ipsam similique sit voluptatem.</p>
        </div>
    ),
    date: "2017-03-13T12:00:00-04:00",
    responseRequired: true,
    isRespondedTo: (Math.random() > 0.5)
};

class NewsfeedView extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <MainMenu selectedItem="Newsfeed"/>
                <div className="pa4 bg-near-white">
                    <div className="flex">
                        <FilterContainer className="mr3 w-third self-start">
                            <Filter
                                id="text1"
                                label="Other text filter"
                                type="text"
                                data={{
                                    placeholder: 'A text filter'
                                }}
                            />
                            <Filter
                                id="text2"
                                label="Text filter"
                                type="text"
                                data={{
                                    placeholder: 'Another text filter'
                                }}
                            />
                            <Filter
                                id="select1"
                                label="Single select"
                                type="select"
                                data={{
                                    inputProps: {
                                        id: 'select1'
                                    },
                                    options: [
                                        {
                                            value: '1',
                                            label: 'Option 1'
                                        },
                                        {
                                            value: '2',
                                            label: 'Option 2'
                                        }
                                    ]
                                }}
                            />
                            <Filter
                                id="select2"
                                label="Multi select"
                                type="select"
                                data={{
                                    inputProps: {
                                        id: 'select2'
                                    },
                                    options: [
                                        {
                                            value: '1',
                                            label: 'Option 1'
                                        },
                                        {
                                            value: '2',
                                            label: 'Option 2'
                                        }
                                    ],
                                    selectConfig: {
                                        multi: true
                                    }
                                }}
                            />
                        </FilterContainer>
                        <PostList
                            className="w-two-thirds"
                            posts={
                                [
                                    {...samplePost},
                                    {...samplePost, id: 2},
                                    {...samplePost, id: 3}
                                ]
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

NewsfeedView.defaultProps = {

};

NewsfeedView.propTypes = {

};

export default NewsfeedView;
