import React, { useState } from 'react';
import "../styles/Table.css"

const Table = () => {
    const [selectedTags, setSelectedTags] = useState(['Tag 1', 'Tag 2', 'Tag 3']);
    const [selectedTag, setSelectedTag] = useState('');
    const tableData = [
        {
            "si": "01",
            "links": "www.google.com",
            "prefix": "prefixSample",
        },
        {
            "si": "02",
            "links": "www.google.com",
            "prefix": "prefixSample",
            
        },
        {
            "si": "03",
            "links": "www.google.com",
            "prefix": "prefixSample",

        },
        {
            "si": "04",
            "links": "www.google.com",
            "prefix": "prefixSample",

        },
        {
            "si": "05",
            "links": "www.google.com",
            "prefix": "prefixSample",

        },
        {
            "si": "06",
            "links": "www.google.com",
            "prefix": "prefixSample",

        },
    ]

    const handleRemoveTag = (tag) => {
        setSelectedTags(selectedTags.filter((t) => t !== tag));
    };

    const tableItem = [
        {
            name: 'Sl  No.',
            width: '5%',
        },
        {
            name: 'Links',
            width: '20%',
        },
        {
            name: 'Prefix',
            width: '20%',
        },
        {
            name: 'Add Tags',
            width: '25%',
        },
        {
            name: 'Selected Tags',
            width: '30%',
        },
    ]

    const tagItems = [
        {
            name: 'Tag 1',
        },
        {
            name: 'Tag 2',
        },
        {
            name: 'Tag 3',
        },
    ]



    return (
        <div className='containerStyle'>
            <div className='table-tr'>
            {tableItem.map(tab=> (<p style={{ width: `${tab.width}` }}>{tab.name}</p>))}
            </div>

            {
                tableData?.map((item, index) => (
                    <div  className='tableHeader' key={index}>
                        <p style={{ width: "5%", paddingLeft: '10px' }}>{item.si}</p>
                        <p style={{ width: "20%" }}>
                            <a
                                href='www.google.com'>
                                {item.links}
                            </a>
                        </p>

                        <p style={{ width: "20%" }}>{item.prefix}</p>
                        <p style={{ width: "25%" }}>
                            <select
                                value={selectedTag}
                                onChange={(e) => setSelectedTag(e.target.value)}
                                className='inputStyle'
                            >
                                <option className='optionStyle' value="">Select Tag</option>
                                {
                                    tagItems.map(tag=>(<option value={tag.name}>{tag.name}</option>))
                                }
                            </select></p>
                        <div className='flexContainer' >{selectedTags.map((tag) => (
                            <div key={tag}
                            className='customTag'>
                                <span>{tag}</span>
                                <span style={{
                                    marginLeft: '10px'
                                }} onClick={() => handleRemoveTag(tag)}>X</span>
                            </div>
                        ))}</div>
                    </div>
                ))
            }

        </div>
    );
};

export default Table;
