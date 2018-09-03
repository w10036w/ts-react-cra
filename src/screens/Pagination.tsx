import { BackTop } from 'antd';
import { address, name } from 'faker';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { AutoSizer, List, WindowScroller } from 'react-virtualized';
import ScrollTopOnMount from '~comp/common/placeholder/ScrollTopOnMount'
import { minGif } from '~const'
import { IRenderRow } from '~type'

const list = Array(10000)
  .fill(1)
  .map(_ => ({
    image: minGif,
    name: name.findName(),
    text: address.streetAddress(),
  }))

class Pagination extends React.PureComponent {
  public render() {
    return (
      <div className="screen screen-pagination">
        <div className="screen__content">
          <ScrollTopOnMount />
          <BackTop />
          <h4>Pagination</h4>
          <p>
            <Link to="/">Back to Home</Link>
          </p>
          <div className="row">
            <div className="col-sm">AutoSizer Example</div>
            <div className="col-sm">WindowScroller Example</div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div className="virtualized-list virtualized-list__simple">
                <AutoSizer>
                  {({ width, height }) => (
                    <List
                      width={width}
                      height={height}
                      rowHeight={60}
                      rowRenderer={this.renderRow}
                      rowCount={list.length}
                      overscanRowCount={3}
                      estimatedRowSize={600000}
                    />
                  )}
                </AutoSizer>
              </div>
            </div>
            <div className="col-sm">
              <div className="virtualized-list">
                <WindowScroller>
                  {({ height, isScrolling, onChildScroll, scrollTop }) => (
                    <div className="virtualized-list__window">
                      <AutoSizer>
                        {({ width }) => (
                          <List
                            autoHeight
                            height={height}
                            isScrolling={isScrolling}
                            onScroll={onChildScroll}
                            scrollTop={scrollTop}
                            overscanColumnCount={2}
                            rowCount={list.length}
                            rowHeight={60}
                            rowRenderer={this.renderRow}
                            width={width}
                          />
                        )}
                      </AutoSizer>
                    </div>
                  )}
                </WindowScroller>
              </div>
            </div>
          </div>
          <p>
            <Link to="/">Back to Home</Link>
          </p>
        </div>
      </div>
    )
  }
  private renderRow = ({
    index: i,
    key,
    style = { position: 'relative' },
    isScrolling,
  }: IRenderRow) => {
    return (
      <div key={key} style={style} className="virtualized-list-item">
        <div className="image">
          <img src={list[i].image} alt="" />
        </div>
        <div className="content">
          <div>
            {list[i].name} {isScrolling ? 'isScrolling' : ''}
          </div>
          <div>{list[i].text}</div>
        </div>
      </div>
    )
  }
}

export default Pagination
