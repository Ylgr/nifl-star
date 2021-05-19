// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: ethermint/types/v1alpha1/account.proto

package types

import (
	fmt "fmt"
	types "github.com/cosmos/cosmos-sdk/x/auth/types"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	_ "github.com/regen-network/cosmos-proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// EthAccount implements the authtypes.AccountI interface and embeds an
// authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
type EthAccount struct {
	*types.BaseAccount `protobuf:"bytes,1,opt,name=base_account,json=baseAccount,proto3,embedded=base_account" json:"base_account,omitempty" yaml:"base_account"`
	CodeHash           []byte `protobuf:"bytes,2,opt,name=code_hash,json=codeHash,proto3" json:"code_hash,omitempty" yaml:"code_hash"`
}

func (m *EthAccount) Reset()      { *m = EthAccount{} }
func (*EthAccount) ProtoMessage() {}
func (*EthAccount) Descriptor() ([]byte, []int) {
	return fileDescriptor_68a082a27334c0d8, []int{0}
}
func (m *EthAccount) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *EthAccount) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_EthAccount.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *EthAccount) XXX_Merge(src proto.Message) {
	xxx_messageInfo_EthAccount.Merge(m, src)
}
func (m *EthAccount) XXX_Size() int {
	return m.Size()
}
func (m *EthAccount) XXX_DiscardUnknown() {
	xxx_messageInfo_EthAccount.DiscardUnknown(m)
}

var xxx_messageInfo_EthAccount proto.InternalMessageInfo

func init() {
	proto.RegisterType((*EthAccount)(nil), "ethermint.types.v1alpha1.EthAccount")
}

func init() {
	proto.RegisterFile("ethermint/types/v1alpha1/account.proto", fileDescriptor_68a082a27334c0d8)
}

var fileDescriptor_68a082a27334c0d8 = []byte{
	// 327 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x4c, 0x50, 0xbd, 0x4e, 0xeb, 0x30,
	0x14, 0xb6, 0xef, 0x70, 0x05, 0x69, 0x07, 0x54, 0x3a, 0x94, 0x22, 0xd9, 0x55, 0x06, 0xd4, 0xa5,
	0xb6, 0x52, 0x26, 0xba, 0x11, 0x09, 0x09, 0xd6, 0x8e, 0x2c, 0xc5, 0x49, 0x4d, 0x5c, 0x91, 0xd4,
	0x55, 0xec, 0x54, 0xf4, 0x0d, 0x18, 0x19, 0x19, 0xfb, 0x10, 0x3c, 0x04, 0x63, 0xc5, 0xc4, 0x14,
	0xa1, 0x44, 0x48, 0xcc, 0x7d, 0x02, 0x94, 0xd8, 0x94, 0x4e, 0x39, 0xe7, 0x7c, 0x7f, 0xf1, 0xe7,
	0x9c, 0x71, 0x2d, 0x78, 0x9a, 0xcc, 0xe6, 0x9a, 0xea, 0xd5, 0x82, 0x2b, 0xba, 0xf4, 0x58, 0xbc,
	0x10, 0xcc, 0xa3, 0x2c, 0x0c, 0x65, 0x36, 0xd7, 0x64, 0x91, 0x4a, 0x2d, 0x5b, 0x9d, 0x1d, 0x8f,
	0xd4, 0x3c, 0xf2, 0xcb, 0xeb, 0xa2, 0x50, 0xaa, 0x44, 0x2a, 0xca, 0x32, 0x2d, 0xe8, 0xd2, 0x0b,
	0xb8, 0xae, 0xc4, 0x99, 0x16, 0x46, 0xd9, 0x3d, 0x31, 0xf8, 0xa4, 0xde, 0xa8, 0x59, 0x2c, 0xd4,
	0x8e, 0x64, 0x24, 0xcd, 0xbd, 0x9a, 0xcc, 0xd5, 0xfd, 0x82, 0x8e, 0x73, 0xa5, 0xc5, 0xa5, 0xc9,
	0x6f, 0xdd, 0x39, 0xcd, 0x80, 0x29, 0x3e, 0xb1, 0xff, 0xd3, 0x81, 0x3d, 0xd8, 0x6f, 0x0c, 0x7b,
	0xc4, 0x3a, 0xd5, 0x49, 0x36, 0x96, 0xf8, 0x4c, 0x71, 0xab, 0xf3, 0x4f, 0x37, 0x39, 0x86, 0xdb,
	0x1c, 0x1f, 0xaf, 0x58, 0x12, 0x8f, 0xdc, 0x7d, 0x0f, 0x77, 0xdc, 0x08, 0xfe, 0x98, 0x2d, 0xcf,
	0x39, 0x0c, 0xe5, 0x94, 0x4f, 0x04, 0x53, 0xa2, 0xf3, 0xaf, 0x07, 0xfb, 0x4d, 0xbf, 0xbd, 0xcd,
	0xf1, 0x91, 0x11, 0xee, 0x20, 0x77, 0x7c, 0x50, 0xcd, 0xd7, 0x4c, 0x89, 0x91, 0xff, 0xb4, 0xc6,
	0xe0, 0x65, 0x8d, 0xc1, 0xf7, 0x1a, 0x83, 0xf7, 0xd7, 0xc1, 0x30, 0x9a, 0x69, 0x91, 0x05, 0x24,
	0x94, 0x89, 0x7d, 0xa2, 0xfd, 0x0c, 0xd4, 0xf4, 0x81, 0x3e, 0x9a, 0x72, 0x4c, 0x71, 0x36, 0xf5,
	0xc6, 0xbf, 0x78, 0x2b, 0x10, 0xdc, 0x14, 0x08, 0x7e, 0x16, 0x08, 0x3e, 0x97, 0x08, 0x6c, 0x4a,
	0x04, 0x3e, 0x4a, 0x04, 0x6e, 0xf1, 0x9e, 0xdb, 0x2a, 0x8e, 0x52, 0x3a, 0x9f, 0xdd, 0xc7, 0x03,
	0xa5, 0x59, 0x6a, 0x3c, 0x82, 0xff, 0x75, 0x53, 0xe7, 0x3f, 0x01, 0x00, 0x00, 0xff, 0xff, 0x02,
	0xe8, 0x1d, 0x19, 0xbe, 0x01, 0x00, 0x00,
}

func (m *EthAccount) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *EthAccount) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *EthAccount) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.CodeHash) > 0 {
		i -= len(m.CodeHash)
		copy(dAtA[i:], m.CodeHash)
		i = encodeVarintAccount(dAtA, i, uint64(len(m.CodeHash)))
		i--
		dAtA[i] = 0x12
	}
	if m.BaseAccount != nil {
		{
			size, err := m.BaseAccount.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintAccount(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintAccount(dAtA []byte, offset int, v uint64) int {
	offset -= sovAccount(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *EthAccount) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.BaseAccount != nil {
		l = m.BaseAccount.Size()
		n += 1 + l + sovAccount(uint64(l))
	}
	l = len(m.CodeHash)
	if l > 0 {
		n += 1 + l + sovAccount(uint64(l))
	}
	return n
}

func sovAccount(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozAccount(x uint64) (n int) {
	return sovAccount(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *EthAccount) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAccount
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: EthAccount: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: EthAccount: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BaseAccount", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAccount
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthAccount
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthAccount
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.BaseAccount == nil {
				m.BaseAccount = &types.BaseAccount{}
			}
			if err := m.BaseAccount.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CodeHash", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAccount
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthAccount
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthAccount
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CodeHash = append(m.CodeHash[:0], dAtA[iNdEx:postIndex]...)
			if m.CodeHash == nil {
				m.CodeHash = []byte{}
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAccount(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthAccount
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipAccount(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowAccount
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowAccount
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowAccount
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthAccount
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupAccount
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthAccount
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthAccount        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowAccount          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupAccount = fmt.Errorf("proto: unexpected end of group")
)