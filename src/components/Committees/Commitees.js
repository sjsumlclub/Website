import React from 'react';
import HoverCard from './HoverCard/HoverCard';

const chunk = (array, size) => {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
};

export default function Committees(props) {
  const { committees } = props;

  const renderCommittees = () => {
    const chunks = chunk(committees, 3);

    // return 1;
    return chunks.map((chunk, i) => {
      return (
        <div key={i} className="row" style={{ justifyContent: 'center' }}>
          {chunk.map((committee) => (
            <div
              key={committee.id}
              className="col-sm-4"
              style={{ marginBottom: 28 }}
            >
              <HoverCard committee={committee} />
            </div>
          ))}
        </div>
      );
    });
  };

  if (!committees.length) {
    return null;
  }

  return (
    <section
      id="committees"
      className="front-page-section"
      style={{
        width: '100%',
        padding: '65px 0 0',
        textAlign: 'center',
        paddingBottom: 40,
      }}
    >
      <div
        className="section-header"
        style={{
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 55,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="title">Committees</h3>
              <p
                style={{
                  fontSize: 16,
                  color: 'rgb(119, 119, 119)',
                  marginTop: 18,
                }}
              >
                Our meetings alternate between Committee Days and Club Days.
                Committee Days let members become experts in their topic of
                interest, while Club Days promote symbiotic learning as a
                community.
              </p>
              <ul
                id="rules"
                style={{
                  padding: 0,
                  listStyle: 'none',
                  textAlign: 'center',
                }}
              >
                <li style={{ marginBottom: 10 }}>
                  <div className="skill-bottom">
                    <i className="fa fa-pencil" style={{ color: '#f18b6d' }} />{' '}
                    <span style={{ color: '#f18b6d' }}>
                      <span style={{ fontWeight: 600 }}>Committee Days:</span>{' '}
                      Members work within their committee to learn, share
                      resources, and complete projects as a team.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="skill-bottom">
                    <i className="fa fa-pencil" style={{ color: '#6a4d8a' }} />{' '}
                    <span style={{ color: '#6a4d8a' }}>
                      <span style={{ fontWeight: 600 }}>Club Days:</span>{' '}
                      Committees rotate to host workshops, paper readings,
                      presentations, or fun games (e.g. trivia) for symbiotic
                      club learning. Learners are exposed to important concepts
                      from other AI areas, and presenters refine their knowledge
                      by teaching others.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="container" style={{ maxWidth: 1280 }}>
          {renderCommittees()}
        </div>
      </div>
    </section>
  );
}
