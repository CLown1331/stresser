# stresser

_Stress test your http endpoint in a cool way_

![Overview](https://raw.githubusercontent.com/CLown1331/stresser/master/logo/logo.png)

Fork of [stresser](https://raw.githubusercontent.com/legraphista/stresser)

## Usage

After installing and configuring you can simply run:
```
stresser
```

The options are:
```
Usage: stresser [options]

    Options:
        -h | --help
            Outputs this helpful information

        -v | --verbose <e|b|c>
            Sets verbosity
                - e: Errors
                - c: HTTP Status Codes
                - b: HTTP body
        
        --config
            read from config file, provide file path
```

Example:

`stresser --config 'filepath'`

___

## Reading the stats
_Example:_
```
  S=    10 |   T=    96 |   A=     0
  E=     0 | T/O=    96 | W/B=     0 | AVG=     0 | MIN=     0 | MAX=     0
1xx=     0 | 2xx=     0 | 3xx=     0 | 4xx=     0 | 5xx=     0
NOT FINISHED=4
```

### Legend:
 - S   = Number of Seconds since the test was started
 - T   = Number of requests completed in the given amount of time
 - A   = Number of requests active (still awaiting a response)
 - E   = Number of requests failed 
 - T/O = Number of requests timed out
 - W/B = Number of requests that contain a response body
 - AVG = Average response time in milliseconds
 - MIN = Minimum response time in milliseconds
 - MAX = Maximum response time in milliseconds
 - 1xx = Number of HTTP code 100-199 responses
 - 2xx = Number of HTTP code 200-299 responses
 - 3xx = Number of HTTP code 300-399 responses
 - 4xx = Number of HTTP code 400-499 responses
 - 5xx = Number of HTTP code 500-599 responses
 - NOT FINISHED = Number of requests that are unanswered and have been forcefully terminated (see option --force)

## HTML output
The HTML file contains:
 - Aggregated stats described above
 - A bar chart with distribution of the response times
 - A line chart with second by second stats

___

## Support

For bugs and/or feature requests please refer to the [Github page](https://github.com/CLown1331/stresser).

## License

`stresser` is offered under MIT license. Please refer to [this page](https://github.com/CLown1331/stresser/blob/master/LICENSE) for more info.
