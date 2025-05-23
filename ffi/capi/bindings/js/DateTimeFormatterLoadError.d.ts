// generated by diplomat-tool
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";


/**
 * Additional information: [1](https://docs.rs/icu/latest/icu/datetime/enum.DateTimeFormatterLoadError.html), [2](https://docs.rs/icu/latest/icu/datetime/pattern/enum.PatternLoadError.html), [3](https://docs.rs/icu_provider/latest/icu_provider/struct.DataError.html), [4](https://docs.rs/icu_provider/latest/icu_provider/enum.DataErrorKind.html)
 */


export class DateTimeFormatterLoadError {

    static fromValue(value: DateTimeFormatterLoadError | string): DateTimeFormatterLoadError;

    get value(): string;

    get ffiValue(): number;

    static Unknown : DateTimeFormatterLoadError;
    static InvalidDateFields : DateTimeFormatterLoadError;
    static UnsupportedLength : DateTimeFormatterLoadError;
    static ConflictingField : DateTimeFormatterLoadError;
    static FormatterTooSpecific : DateTimeFormatterLoadError;
    static DataMarkerNotFound : DateTimeFormatterLoadError;
    static DataIdentifierNotFound : DateTimeFormatterLoadError;
    static DataInvalidRequest : DateTimeFormatterLoadError;
    static DataInconsistentData : DateTimeFormatterLoadError;
    static DataDowncast : DateTimeFormatterLoadError;
    static DataDeserialize : DateTimeFormatterLoadError;
    static DataCustom : DateTimeFormatterLoadError;
    static DataIo : DateTimeFormatterLoadError;


    constructor(value: DateTimeFormatterLoadError | string );
}